-- =============================================
-- M-C CONSULTORÍA - DATABASE SETUP FOR pgAdmin 4
-- EJECUTA ESTE SCRIPT EN TU pgAdmin 4
-- =============================================

-- 1. CREAR BASE DE DATOS (si no existe)
-- Ejecuta esto PRIMERO en tu servidor PostgreSQL
CREATE DATABASE mc_consultoria 
WITH 
ENCODING = 'UTF8'
LC_COLLATE = 'Spanish_Mexico.1252'
LC_CTYPE = 'Spanish_Mexico.1252'
TEMPLATE = template0;

-- 2. CONECTARTE A LA BASE DE DATOS mc_consultoria
-- En pgAdmin, conéctate a la base de datos mc_consultoria y ejecuta el resto:

-- Extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================
-- TABLA: usuarios (Sistema de autenticación)
-- =============================================
DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100),
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- TABLA: productos (Catálogo de productos)
-- =============================================
DROP TABLE IF EXISTS productos CASCADE;

CREATE TABLE productos (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    imagen_url TEXT NOT NULL,
    caracteristicas TEXT[] DEFAULT '{}',
    aplicaciones TEXT[] DEFAULT '{}',
    especificaciones TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES usuarios(id) ON DELETE SET NULL
);

-- =============================================
-- TABLA: solicitudes_servicio (Formularios de servicios)
-- =============================================
DROP TABLE IF EXISTS solicitudes_servicio CASCADE;

CREATE TABLE solicitudes_servicio (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    tipo_servicio VARCHAR(50) NOT NULL CHECK (tipo_servicio IN ('dictamen', 'tramite')),
    subtipo_servicio VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100),
    telefono VARCHAR(20) NOT NULL,
    nombre_empresa VARCHAR(255) NOT NULL,
    ubicacion TEXT NOT NULL,
    comentarios TEXT,
    status VARCHAR(20) DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'en_proceso', 'completado', 'cancelado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- TABLA: solicitudes_producto (Solicitudes de productos)
-- =============================================
DROP TABLE IF EXISTS solicitudes_producto CASCADE;

CREATE TABLE solicitudes_producto (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    producto_id UUID REFERENCES productos(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    mensaje TEXT,
    metodo_contacto VARCHAR(20) DEFAULT 'email' CHECK (metodo_contacto IN ('email', 'whatsapp')),
    status VARCHAR(20) DEFAULT 'pendiente' CHECK (status IN ('pendiente', 'contactado', 'cerrado')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ÍNDICES para optimización
-- =============================================
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_role ON usuarios(role);
CREATE INDEX idx_productos_categoria ON productos(categoria);
CREATE INDEX idx_productos_active ON productos(is_active);
CREATE INDEX idx_solicitudes_servicio_tipo ON solicitudes_servicio(tipo_servicio);
CREATE INDEX idx_solicitudes_servicio_status ON solicitudes_servicio(status);

-- =============================================
-- TRIGGERS para updated_at automático
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_usuarios_updated_at ON usuarios;
CREATE TRIGGER update_usuarios_updated_at BEFORE UPDATE ON usuarios
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_productos_updated_at ON productos;
CREATE TRIGGER update_productos_updated_at BEFORE UPDATE ON productos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_solicitudes_servicio_updated_at ON solicitudes_servicio;
CREATE TRIGGER update_solicitudes_servicio_updated_at BEFORE UPDATE ON solicitudes_servicio
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- DATOS INICIALES (Usuario administrador)
-- =============================================

-- Primero eliminar si existe para recrear con hash correcto
DELETE FROM usuarios WHERE email = 'admin@mc.com';

-- Crear usuario admin con hash correcto
-- Password: admin123 = simple_hash_1633259245_8
INSERT INTO usuarios (email, password_hash, nombre, apellido_paterno, apellido_materno, role)
VALUES (
    'admin@mc.com',
    'simple_hash_1633259245_8', -- password: admin123
    'Administrador',
    'Sistema',
    'MC',
    'admin'
);

-- También agregar un usuario de prueba
-- Password: test123 = simple_hash_1111571013_7
INSERT INTO usuarios (email, password_hash, nombre, apellido_paterno, apellido_materno, role)
VALUES (
    'test@mc.com',
    'simple_hash_1111571013_7', -- password: test123
    'Usuario',
    'Prueba',
    'Test',
    'user'
) ON CONFLICT (email) DO NOTHING;

-- =============================================
-- PRODUCTOS INICIALES
-- =============================================
INSERT INTO productos (titulo, descripcion, categoria, imagen_url, caracteristicas, aplicaciones, especificaciones, created_by) 
VALUES 
(
    'Cascos de seguridad con certificación NOM',
    'Obligatorios en obras y zonas industriales',
    'Equipo de Protección Personal (EPP)',
    'https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800',
    ARRAY['Fabricados en polietileno de alta densidad', 'Arnés ajustable con sistema de suspensión', 'Opciones eléctricas hasta 20,000V'],
    ARRAY['Construcción', 'Electricidad', 'Industria pesada'],
    ARRAY['Cumple NOM-115-STPS', 'Resistencia al impacto', 'Ventilación superior opcional'],
    (SELECT id FROM usuarios WHERE email = 'admin@mc.com')
),
(
    'Extintores recargados con ficha técnica',
    'Agua, polvo químico seco, CO₂, para distintos tipos de fuego',
    'Equipos de Emergencia',
    'https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800',
    ARRAY['Recarga certificada', 'Ficha técnica incluida', 'Diferentes tipos disponibles'],
    ARRAY['Oficinas', 'Industrias', 'Centros comerciales'],
    ARRAY['Certificación vigente', 'Presión adecuada', 'Fecha de vencimiento visible'],
    (SELECT id FROM usuarios WHERE email = 'admin@mc.com')
),
(
    'Señalamientos de emergencia fotoluminiscentes',
    'Rutas de evacuación, salidas de emergencia, zonas de seguridad',
    'Señalamientos',
    'https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800',
    ARRAY['Material fotoluminiscente', 'Resistente a la intemperie', 'Fácil instalación'],
    ARRAY['Edificios', 'Centros comerciales', 'Escuelas'],
    ARRAY['Norma oficial vigente', 'Luminosidad mínima', 'Durabilidad exterior'],
    (SELECT id FROM usuarios WHERE email = 'admin@mc.com')
) ON CONFLICT DO NOTHING;

-- =============================================
-- VERIFICACIONES FINALES
-- =============================================
-- Verificar que las tablas se crearon correctamente
SELECT 'Usuarios creados:' as info, COUNT(*) as total FROM usuarios;
SELECT 'Productos creados:' as info, COUNT(*) as total FROM productos;

-- Mostrar el usuario admin
SELECT 'Usuario Admin:' as info, email, nombre, role FROM usuarios WHERE role = 'admin';

-- =============================================
-- FIN DEL SCRIPT
-- =============================================

COMMIT;
