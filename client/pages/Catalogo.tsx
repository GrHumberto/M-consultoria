import { Navbar } from "@/components/ui/navbar";
import { McButton } from "@/components/ui/mc-button";
import { ProductCard } from "@/components/ui/product-card";

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <div className="pt-24 px-4 md:px-28 py-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="mb-8">
            <span
              className="inline-block px-6 py-2 rounded-full border-2 text-sm font-medium"
              style={{ borderColor: "#EF832C", color: "#EF832C" }}
            >
              CATÁLOGO DE PRODUCTOS
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ color: "#EF832C" }}
          >
            Catálogo De Equipos Y Productos Para Protección Civil
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluciones en señalética, EPP, extintores y botiquines para
            empresas, oficinas, escuelas e industrias. Productos certificados y
            alineados a la normativa vigente.
          </p>
        </div>
      </div>

      {/* Señalamientos Section */}
      <div className="px-4 md:px-28 py-16">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-light text-center mb-12"
            style={{ color: "#4E8BEE" }}
          >
            Señalamientos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Señalamientos"
              title="Señalamientos de emergencia fotoluminiscentes"
              description="Rutas de evacuación, salidas de emergencia, zonas de seguridad"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/0b7a6c00c01f1e8e4b8b9c3d1e0f2a5b3c4d5e6f?width=800"
              category="Señalamientos"
              title="Mapas de evacuación personalizados"
              description="Diseñamos a medida según distribución del inmueble"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
              category="Señalamientos"
              title="Pósters de primeros auxilios y uso de extintores"
              description="Material visual educativo y obligatorio"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800"
              category="Señalamientos"
              title="Etiquetas y vinilos para zonas de riesgo"
              description="Identifican alto voltaje, uso de EPP, etc."
            />
          </div>
        </div>
      </div>

      {/* Equipos de Emergencia Section */}
      <div className="px-4 md:px-28 py-16">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-light text-center mb-12"
            style={{ color: "#4E8BEE" }}
          >
            Equipos de Emergencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Equipos de Emergencia"
              title="Botiquines de primeros auxilios completos"
              description="Obligatorios en oficios y construcción"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Equipos de Emergencia"
              title="Extintores recargados con ficha técnica"
              description="Tipos de especialidad: polvo en tipo incendio"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
              category="Equipos de Emergencia"
              title="Luces de emergencia con respaldo"
              description="Agua, polvo químico seco, CO₂, para distintos tipos de fuego"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
              category="Equipos de Emergencia"
              title="Radios de comunicación bidireccional"
              description="UHF/VHF, cargadores, antenas y accesorios"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800"
              category="Equipos de Emergencia"
              title="Alarmas sonoras o visuales para evacuación"
              description="Para informar áreas peligrosas y restringidas"
            />
          </div>
        </div>
      </div>

      {/* Complementos para Protección y Respuesta Section */}
      <div className="px-4 md:px-28 py-16">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-light text-center mb-12"
            style={{ color: "#4E8BEE" }}
          >
            Complementos para Protección y Respuesta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Equipo de Protección Personal (EPP)"
              title="Cascos de seguridad con certificación NOM"
              description="Obligatorios en obras y zonas industriales"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Señalamientos"
              title="Señalamientos de emergencia fotoluminiscentes"
              description="Rutas de evacuación, salidas de emergencia, zonas de seguridad"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
              category="Equipos de Emergencia"
              title="Extintores recargados con ficha técnica"
              description="Agua, polvo químico seco, CO₂, para distintos tipos de fuego"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800"
              category="Complementos para Protección y Respuesta"
              title="Cinta de precaución y acordonamiento"
              description="Para delimitar áreas peligrosas o restringidas"
            />
          </div>
        </div>
      </div>

      {/* Equipo de Protección Personal (EPP) Section */}
      <div className="px-4 md:px-28 py-16">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-light text-center mb-12"
            style={{ color: "#4E8BEE" }}
          >
            Equipo de Protección Personal (EPP)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Equipo de Protección Personal (EPP)"
              title="Cascos de seguridad con certificación NOM"
              description="Obligatorios en obras y zonas industriales"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
              category="Señalamientos"
              title="Señalamientos de emergencia fotoluminiscentes"
              description="Rutas de evacuación, salidas de emergencia, zonas de seguridad"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
              category="Equipos de Emergencia"
              title="Extintores recargados con ficha técnica"
              description="Agua, polvo químico seco, CO₂, para distintos tipos de fuego"
            />
            <ProductCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800"
              category="Complementos para Protección y Respuesta"
              title="Cinta de precaución y acordonamiento"
              description="Para delimitar áreas peligrosas o restringidas"
            />
          </div>
        </div>
      </div>

      {/* Contact Section with Google Maps */}
      <div
        className="px-4 md:px-28 py-20"
        style={{ backgroundColor: "#EF832C" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">¡Contáctanos!</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Si tiene alguna duda o comentario, contacta a alguna de nuestras
                especialistas, con gusto podrán brindarle mayor información.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-semibold">Ing. Yanet Castañeda</p>
                  <p>961 155-3538</p>
                  <p>mc.consultoría@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Ing. Cintya Manuel</p>
                  <p>961 245-3558</p>
                  <p>mc.consultoría@gmail.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#EF832C]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244004.95347754987!2d-93.34934894624!3d16.73599895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8c8e6e6d823%3A0x66d84a0c2b2a0000!2sTuxtla%20Guti%C3%A9rrez%2C%20Chis.%2C%20Mexico!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tuxtla Gutiérrez Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
