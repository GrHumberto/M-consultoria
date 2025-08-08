import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { authHandlers } from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Authentication API routes
  app.get("/api/test-db", async (_req, res) => {
    const result = await authHandlers.testDB();
    res.status(result.status).json(result.data);
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email y contraseña son requeridos'
      });
    }

    const result = await authHandlers.login(email, password);
    res.status(result.status).json(result.data);
  });

  app.post("/api/auth/register", async (req, res) => {
    const { email, password, nombre, apellido_paterno, apellido_materno } = req.body;
    if (!email || !password || !nombre || !apellido_paterno) {
      return res.status(400).json({
        success: false,
        error: 'Email, contraseña, nombre y apellido paterno son requeridos'
      });
    }

    const result = await authHandlers.register({
      email,
      password,
      nombre,
      apellido_paterno,
      apellido_materno
    });
    res.status(result.status).json(result.data);
  });

  return app;
}
