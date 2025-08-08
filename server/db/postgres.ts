/**
 * @fileoverview PostgreSQL database connection and operations
 * Server-side only
 */

import { Pool } from "pg";

// PostgreSQL configuration - usando credenciales directas por ahora
const pgConfig = {
  host: "localhost",
  port: 5432,
  database: "mc_consultoria",
  user: "postgres",
  password: "Galletas", // Tu contraseña configurada
};

console.log("PostgreSQL Config:", {
  host: pgConfig.host,
  port: pgConfig.port,
  database: pgConfig.database,
  user: pgConfig.user,
  password: pgConfig.password ? "***configured***" : "NOT SET",
});

// Create connection pool
let pool: Pool | null = null;

const getPool = () => {
  if (!pool) {
    try {
      pool = new Pool(pgConfig);
      console.log("PostgreSQL Pool created successfully");
    } catch (error) {
      console.error("Failed to create PostgreSQL pool:", error);
      throw error;
    }
  }
  return pool;
};

// Simple password hash function (for demo - use bcrypt in production)
const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return `simple_hash_${Math.abs(hash)}_${password.length}`;
};

// Database operations
export const dbOperations = {
  // Test database connection
  async testConnection() {
    try {
      const pool = getPool();
      const client = await pool.connect();
      const result = await client.query("SELECT NOW()");
      client.release();
      return { success: true, data: result.rows[0] };
    } catch (error) {
      console.error("Database connection test failed:", error);
      return { success: false, error: error.message };
    }
  },

  // Get user by email
  async getUser(email: string) {
    try {
      const pool = getPool();
      const client = await pool.connect();
      try {
        const query = `
          SELECT id, email, nombre, apellido_paterno, apellido_materno, role, is_active
          FROM usuarios 
          WHERE email = $1 AND is_active = true
        `;
        const result = await client.query(query, [email]);
        return { success: true, data: result.rows[0] || null };
      } finally {
        client.release();
      }
    } catch (error) {
      console.error("Get user error:", error);
      return { success: false, error: error.message };
    }
  },

  // Create new user
  async createUser(userData: {
    email: string;
    password: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
  }) {
    try {
      console.log(`[REGISTER] Creating user: ${userData.email}`);
      const pool = getPool();
      const client = await pool.connect();
      try {
        const hashedPassword = hashPassword(userData.password);
        console.log(`[REGISTER] Password hash for ${userData.email}: ${hashedPassword}`);

        const query = `
          INSERT INTO usuarios (email, password_hash, nombre, apellido_paterno, apellido_materno, role)
          VALUES ($1, $2, $3, $4, $5, 'user')
          RETURNING id, email, nombre, apellido_paterno, apellido_materno, role
        `;

        const params = [
          userData.email,
          hashedPassword,
          userData.nombre,
          userData.apellido_paterno,
          userData.apellido_materno || null,
        ];

        const result = await client.query(query, params);
        console.log(`[REGISTER] User created successfully: ${userData.email}`);
        return { success: true, data: result.rows[0] };
      } finally {
        client.release();
      }
    } catch (error) {
      console.error("Create user error:", error);
      if (error.code === "23505") {
        // Unique violation
        return { success: false, error: "El email ya está registrado" };
      }
      return { success: false, error: "Error al crear la cuenta" };
    }
  },

  // Verify user credentials
  async verifyUser(email: string, password: string) {
    try {
      console.log(`[LOGIN] Attempting to verify user: ${email}`);
      const pool = getPool();
      const client = await pool.connect();
      try {
        const hashedPassword = hashPassword(password);
        console.log(`[LOGIN] Password hash generated: ${hashedPassword}`);

        // First, check if user exists
        const userQuery = `
          SELECT id, email, nombre, apellido_paterno, apellido_materno, role, password_hash
          FROM usuarios
          WHERE email = $1 AND is_active = true
        `;

        const userResult = await client.query(userQuery, [email]);

        if (userResult.rows.length === 0) {
          console.log(`[LOGIN] User not found: ${email}`);
          return { success: true, data: null };
        }

        const user = userResult.rows[0];
        console.log(`[LOGIN] User found: ${email}, stored hash: ${user.password_hash}`);

        // Check password
        if (user.password_hash === hashedPassword) {
          console.log(`[LOGIN] Password match for user: ${email}`);
          return {
            success: true,
            data: {
              id: user.id,
              email: user.email,
              nombre: user.nombre,
              apellido_paterno: user.apellido_paterno,
              apellido_materno: user.apellido_materno,
              role: user.role
            }
          };
        } else {
          console.log(`[LOGIN] Password mismatch for user: ${email}`);
          console.log(`[LOGIN] Expected: ${hashedPassword}, Got: ${user.password_hash}`);
          return { success: true, data: null };
        }

      } finally {
        client.release();
      }
    } catch (error) {
      console.error("Verify user error:", error);
      return { success: false, error: error.message };
    }
  },
};
