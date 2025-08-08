import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { McButton } from "@/components/ui/mc-button";
import { McBadge } from "@/components/ui/mc-badge";
import { ServiceCard } from "@/components/ui/service-card";
import { ProductCard } from "@/components/ui/product-card";
import { DictamenCard } from "@/components/ui/dictamen-card";
import { TramiteCard } from "@/components/ui/tramite-card";
import { ServiceModal } from "@/components/ui/service-modal";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalServiceType, setModalServiceType] = useState<
    "dictamen" | "tramite"
  >("dictamen");

  const openModal = (serviceType: "dictamen" | "tramite") => {
    setModalServiceType(serviceType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultServiceType={modalServiceType}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-5xl px-4 text-center">
          <McBadge variant="white" className="text-base">
            Seguridad, cumplimiento y prevención para tu empresa
          </McBadge>

          <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
            M-C Consultoría en Protección Civil
          </h1>

          <p className="max-w-4xl text-lg md:text-xl font-light text-white leading-relaxed">
            Somos una empresa chiapaneca especializada en prevención de riesgos,
            capacitación empresarial, trámites oficiales, señalización y todo lo
            necesario para cumplir con la normativa de Protección Civil en
            México.
          </p>

          <McButton
            variant="blue"
            size="md"
            onClick={() => {
              const footer = document.querySelector("footer");
              footer?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contáctanos
          </McButton>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center gap-8 px-4 md:px-28 py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8 flex-1 max-w-7xl mx-auto">
          <div className="flex-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/15a79ae65db5c737bd76744d63ddf0784d6b4b5b?width=1504"
              alt="Consultores expertos"
              className="w-full rounded-2xl object-cover h-64 md:h-96"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start gap-6 md:gap-8 p-4 md:p-10">
            <McBadge variant="orange">¿QUIÉNES SOMOS?</McBadge>

            <h2 className="text-3xl md:text-4xl font-medium text-primary leading-tight tracking-tight self-stretch">
              Consultores Expertos En Protección Civil Para Empresas
            </h2>

            <div className="text-lg font-light text-foreground leading-relaxed self-stretch space-y-4">
              <p>
                En M-C Consultoría, brindamos soluciones integrales en
                Protección Civil para empresas, comercios, escuelas, clínicas y
                organizaciones de cualquier tamaño.
              </p>
              <p>
                Nuestro objetivo es facilitar el cumplimiento normativo, reducir
                riesgos y proteger a las personas e instalaciones conforme a las
                Normas Oficiales Mexicanas (NOMs) y reglamentos locales y
                federales.
              </p>
              <p>
                Ofrecemos un servicio confiable, ágil y personalizado que
                garantiza seguridad, legalidad y continuidad operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-center items-center gap-10 px-4 md:px-28 py-20 bg-gray-50">
        <div className="flex flex-col justify-center items-center gap-8 max-w-6xl">
          <McBadge variant="blue">SERVICIOS INTERNOS</McBadge>

          <h2 className="text-3xl md:text-4xl font-medium text-secondary-400 text-center leading-tight tracking-tight">
            Capacitación Y Entrenamiento En Protección Civil
          </h2>

          <p className="text-lg md:text-xl font-light text-secondary-600 text-center leading-relaxed max-w-4xl">
            Capacita a tu equipo con nuestros cursos especializados en primeros
            auxilios, evacuación, combate de incendios y rescate. Cumple con la
            ley y prepárate para actuar ante cualquier emergencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/bdb1e5b3265a07f2c0f7bacd6534faaea1e35bec?width=736"
            title="PRIMEROS AUXILIOS"
            description="Formación básica en atención a emergencias médicas: RCP, heridas y fracturas."
          />
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/440d04d080b326288f74cb534240dd8ed160247d?width=736"
            title="PREVENCIÓN Y COMBATE DE INCENDIOS"
            description="Uso correcto de extintores, detección oportuna y respuesta ante conatos de incendio."
          />
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/7f9fa49938d42d3aa2d78d69e2bcfde8c0d10d53?width=736"
            title="EVACUACIÓN DE INMUEBLES"
            description="Simulación de escenarios de emergencia, rutas de evacuación y puntos de reunión."
          />
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/d1d2ef338fb6b47abc81df04604e50eee341c778?width=736"
            title="BÚSQUEDA Y RESCATE"
            description="Técnicas para localizar y rescatar personas en espacios confinados o estructuras colapsadas."
          />
        </div>
      </section>

      {/* Dictamenes Section */}
      <section className="flex flex-col gap-10 px-4 md:px-28 py-20 bg-white">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-start gap-8 lg:w-1/2 py-6">
            <McBadge variant="orange">DICTÁMENES</McBadge>

            <div className="flex flex-col items-start gap-6 self-stretch">
              <h2 className="text-3xl md:text-4xl font-medium text-primary leading-tight tracking-tight self-stretch">
                Dictamenes Técnicos En Protección Civil Y Seguridad
              </h2>
              <p className="text-lg font-light text-foreground leading-relaxed self-stretch">
                Emitimos dictámenes profesionales obligatorios para trámites
                ante Protección Civil y otras dependencias. Evalúa tus
                instalaciones y evita riesgos legales o estructurales.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 self-stretch p-6 rounded-2xl bg-gray-50 border">
              <h3 className="text-xl font-medium text-foreground leading-tight self-stretch">
                ¿Qué Es Un Dictamen?
              </h3>
              <p className="text-base font-light text-foreground leading-relaxed self-stretch">
                Es un documento técnico que avala la seguridad y el cumplimiento
                normativo de un inmueble, instalación o sistema (como gas,
                electricidad o estructura). Lo emite un especialista acreditado
                y suele ser requisito obligatorio para trámites ante Protección
                Civil, licencias de funcionamiento o construcción.
              </p>
            </div>

            <McButton
              variant="blue"
              size="md"
              className="self-stretch"
              onClick={() => openModal("dictamen")}
            >
              Solicitar Dictamen Ahora
            </McButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <DictamenCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.2299 3.18996C29.5227 3.35295 29.7526 3.60932 29.8827 3.91817C30.0128 4.22701 30.0358 4.57055 29.9479 4.89396L25.9639 19.5H40.4999C40.7922 19.5 41.0782 19.5854 41.3226 19.7458C41.567 19.9061 41.7593 20.1344 41.8757 20.4025C41.9921 20.6706 42.0277 20.967 41.978 21.255C41.9283 21.5431 41.7955 21.8104 41.5959 22.024L20.5959 44.524C20.3672 44.7696 20.0627 44.9314 19.7312 44.9835C19.3996 45.0356 19.0602 44.975 18.7671 44.8114C18.4741 44.6479 18.2444 44.3907 18.1147 44.0812C17.985 43.7716 17.9629 43.4276 18.0519 43.104L22.0359 28.5H7.49991C7.20758 28.4999 6.92164 28.4145 6.67721 28.2542C6.43279 28.0938 6.24055 27.8655 6.12412 27.5974C6.00769 27.3293 5.97214 27.033 6.02185 26.7449C6.07155 26.4568 6.20435 26.1896 6.40391 25.976L27.4039 3.47596C27.6326 3.23125 27.9367 3.07015 28.2676 3.01831C28.5986 2.96648 28.9373 3.02691 29.2299 3.18996Z"
                    fill="#FFFBF8"
                  />
                </svg>
              }
              title="Dictamen Eléctrico"
              description="Revisión detallada de tus instalaciones eléctricas para prevenir incendios y asegurar el cumplimiento de las NOM."
            />
            <DictamenCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5V40.5H7.5C7.10218 40.5 6.72064 40.658 6.43934 40.9393C6.15804 41.2206 6 41.6022 6 42C6 42.3978 6.15804 42.7794 6.43934 43.0607C6.72064 43.342 7.10218 43.5 7.5 43.5H40.5C40.8978 43.5 41.2794 43.342 41.5607 43.0607C41.842 42.7794 42 42.3978 42 42C42 41.6022 41.842 41.2206 41.5607 40.9393C41.2794 40.658 40.8978 40.5 40.5 40.5H39V7.5C39.3978 7.5 39.7794 7.34196 40.0607 7.06066C40.342 6.77936 40.5 6.39782 40.5 6C40.5 5.60218 40.342 5.22064 40.0607 4.93934C39.7794 4.65804 39.3978 4.5 39 4.5H9ZM18 12C17.6022 12 17.2206 12.158 16.9393 12.4393C16.658 12.7206 16.5 13.1022 16.5 13.5C16.5 13.8978 16.658 14.2794 16.9393 14.5607C17.2206 14.842 17.6022 15 18 15H21C21.3978 15 21.7794 14.842 22.0607 14.5607C22.342 14.2794 22.5 13.8978 22.5 13.5C22.5 13.1022 22.342 12.7206 22.0607 12.4393C21.7794 12.158 21.3978 12 21 12H18ZM16.5 19.5C16.5 19.1022 16.658 18.7206 16.9393 18.4393C17.2206 18.158 17.6022 18 18 18H21C21.3978 18 21.7794 18.158 22.0607 18.4393C22.342 18.7206 22.5 19.1022 22.5 19.5C22.5 19.8978 22.342 20.2794 22.0607 20.5607C21.7794 20.842 21.3978 21 21 21H18C17.6022 21 17.2206 20.842 16.9393 20.5607C16.658 20.2794 16.5 19.8978 16.5 19.5ZM18 24C17.6022 24 17.2206 24.158 16.9393 24.4393C16.658 24.7206 16.5 25.1022 16.5 25.5C16.5 25.8978 16.658 26.2794 16.9393 26.5607C17.2206 26.842 17.6022 27 18 27H21C21.3978 27 21.7794 26.842 22.0607 26.5607C22.342 26.2794 22.5 25.8978 22.5 25.5C22.5 25.1022 22.342 24.7206 22.0607 24.4393C21.7794 24.158 21.3978 24 21 24H18ZM25.5 13.5C25.5 13.1022 25.658 12.7206 25.9393 12.4393C26.2206 12.158 26.6022 12 27 12H30C30.3978 12 30.7794 12.158 31.0607 12.4393C31.342 12.7206 31.5 13.1022 31.5 13.5C31.5 13.8978 31.342 14.2794 31.0607 14.5607C30.7794 14.842 30.3978 15 30 15H27C26.6022 15 26.2206 14.842 25.9393 14.5607C25.658 14.2794 25.5 13.8978 25.5 13.5ZM27 18C26.6022 18 26.2206 18.158 25.9393 18.4393C25.658 18.7206 25.5 19.1022 25.5 19.5C25.5 19.8978 25.658 20.2794 25.9393 20.5607C26.2206 20.842 26.6022 21 27 21H30C30.3978 21 30.7794 20.842 31.0607 20.5607C31.342 20.2794 31.5 19.8978 31.5 19.5C31.5 19.1022 31.342 18.7206 31.0607 18.4393C30.7794 18.158 30.3978 18 30 18H27ZM25.5 25.5C25.5 25.1022 25.658 24.7206 25.9393 24.4393C26.2206 24.158 26.6022 24 27 24H30C30.3978 24 30.7794 24.158 31.0607 24.4393C31.342 24.7206 31.5 25.1022 31.5 25.5C31.5 25.8978 31.342 26.2794 31.0607 26.5607C30.7794 26.842 30.3978 27 30 27H27C26.6022 27 26.2206 26.842 25.9393 26.5607C25.658 26.2794 25.5 25.8978 25.5 25.5ZM18 39V34.5C18 34.1022 18.158 33.7206 18.4393 33.4393C18.7206 33.158 19.1022 33 19.5 33H28.5C28.8978 33 29.2794 33.158 29.5607 33.4393C29.842 33.7206 30 34.1022 30 34.5V39C30 39.3978 29.842 39.7794 29.5607 40.0607C29.2794 40.342 28.8978 40.5 28.5 40.5H19.5C19.1022 40.5 18.7206 40.342 18.4393 40.0607C18.158 39.7794 18 39.3978 18 39Z"
                    fill="#FFFBF8"
                  />
                </svg>
              }
              title="Dictamen Estructural"
              description="Análisis de la estabilidad del inmueble. Obligatorio para nuevas construcciones, remodelaciones y trámites oficiales."
            />
            <DictamenCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 8.1199C27 5.4479 23.768 4.1099 21.88 5.9999L12.88 14.9999H9.01601C6.73401 14.9999 4.38001 16.3279 3.69601 18.8099C3.23197 20.5008 2.99786 22.2465 3.00001 23.9999C3.00001 25.7959 3.24201 27.5359 3.70001 29.1899C4.38201 31.6699 6.73601 32.9999 9.01801 32.9999H12.878L21.878 41.9999C23.768 43.8899 27 42.5519 27 39.8799V8.1199ZM37.168 10.2119C37.4493 9.931 37.8305 9.77322 38.228 9.77322C38.6255 9.77322 39.0068 9.931 39.288 10.2119C46.904 17.8259 46.904 30.1719 39.288 37.7879C39.0037 38.0529 38.6276 38.1971 38.239 38.1903C37.8504 38.1834 37.4796 38.026 37.2048 37.7511C36.9299 37.4763 36.7725 37.1056 36.7657 36.7169C36.7588 36.3283 36.9031 35.9523 37.168 35.6679C38.7004 34.1357 39.916 32.3167 40.7453 30.3147C41.5746 28.3127 42.0015 26.1669 42.0015 23.9999C42.0015 21.8329 41.5746 19.6872 40.7453 17.6851C39.916 15.6831 38.7004 13.8641 37.168 12.3319C36.8871 12.0507 36.7293 11.6694 36.7293 11.2719C36.7293 10.8744 36.8871 10.4932 37.168 10.2119Z"
                    fill="#FFFBF8"
                  />
                  <path
                    d="M31.8639 15.5139C32.0032 15.3745 32.1686 15.2639 32.3507 15.1885C32.5327 15.113 32.7279 15.0742 32.9249 15.0742C33.122 15.0742 33.3171 15.113 33.4992 15.1885C33.6812 15.2639 33.8466 15.3745 33.9859 15.5139C35.1004 16.6282 35.9845 17.9512 36.5877 19.4072C37.1909 20.8633 37.5014 22.4239 37.5014 23.9999C37.5014 25.5759 37.1909 27.1365 36.5877 28.5926C35.9845 30.0486 35.1004 31.3716 33.9859 32.4859C33.7029 32.759 33.3239 32.91 32.9306 32.9064C32.5373 32.9028 32.1612 32.7449 31.8832 32.4666C31.6052 32.1884 31.4476 31.8121 31.4444 31.4188C31.4412 31.0255 31.5926 30.6467 31.8659 30.3639C32.7017 29.5282 33.3646 28.536 33.8169 27.4441C34.2692 26.3521 34.502 25.1818 34.502 23.9999C34.502 22.818 34.2692 21.6477 33.8169 20.5557C33.3646 19.4638 32.7017 18.4716 31.8659 17.6359C31.585 17.3546 31.4272 16.9734 31.4272 16.5759C31.4272 16.1784 31.585 15.7971 31.8659 15.5159L31.8639 15.5139Z"
                    fill="#FFFBF8"
                  />
                </svg>
              }
              title="Dictamen de Sonido"
              description="Verifica que el nivel de ruido en tu negocio esté dentro de los límites permitidos por ley."
            />
            <DictamenCard
              icon={
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.9261 4.57191C25.8055 4.4104 25.6537 4.27482 25.4796 4.17328C25.3055 4.07175 25.1128 4.00633 24.9128 3.98094C24.7129 3.95556 24.5099 3.97072 24.316 4.02552C24.1221 4.08032 23.9411 4.17365 23.7841 4.29991C19.9512 7.37706 17.4229 11.7892 16.7061 16.6519C15.3924 15.6993 14.241 14.5411 13.2961 13.2219C13.1677 13.0425 13.0014 12.8936 12.809 12.7859C12.6165 12.6781 12.4026 12.6141 12.1826 12.5985C11.9626 12.5828 11.7418 12.6158 11.536 12.6953C11.3303 12.7747 11.1445 12.8985 10.9921 13.0579C8.35071 15.821 6.65756 19.3533 6.15789 23.143C5.65821 26.9327 6.37796 30.7831 8.21286 34.1364C10.0478 37.4897 12.9026 40.1718 16.3637 41.7942C19.8248 43.4166 23.7126 43.895 27.4638 43.1602C31.215 42.4254 34.6349 40.5154 37.228 37.707C39.8212 34.8986 41.453 31.3376 41.887 27.5398C42.3211 23.742 41.5348 19.9046 39.6422 16.5836C37.7495 13.2625 34.8488 10.6302 31.3601 9.06791C29.2155 8.02505 27.3521 6.48331 25.9261 4.57191ZM31.5001 28.4999C31.4993 29.5848 31.2632 30.6566 30.8081 31.6413C30.3529 32.6261 29.6896 33.5004 28.8637 34.2039C28.0379 34.9074 27.0693 35.4234 26.0247 35.7163C24.9801 36.0092 23.8844 36.0719 22.8133 35.9002C21.7421 35.7286 20.7209 35.3266 19.8201 34.7219C18.9194 34.1173 18.1605 33.3245 17.5959 32.3981C17.0313 31.4717 16.6743 30.4339 16.5497 29.3562C16.4251 28.2786 16.5358 27.1867 16.8741 26.1559C18.1301 27.0859 19.5741 27.7759 21.1401 28.1559C21.5646 25.4178 22.9252 22.9116 24.9901 21.0639C26.7921 21.3039 28.4456 22.1902 29.6431 23.558C30.8406 24.9258 31.5005 26.682 31.5001 28.4999Z"
                    fill="#FFFBF8"
                  />
                </svg>
              }
              title="Dictamen de Gas"
              description="Evaluación integral de instalaciones de gas LP o natural. Detecta fugas y asegura su operación segura."
            />
          </div>
        </div>
      </section>

      {/* Tramites Section */}
      <section className="flex items-start gap-8 px-4 md:px-28 py-20 bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 flex-1 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            <TramiteCard
              title="Factibilidad De Uso Y Destino De Suelo"
              description="Confirma que tu giro comercial es compatible con la ubicación del predio."
            />
            <TramiteCard
              title="Licencia De Funcionamiento"
              description="Permiso oficial que habilita la operación de tu establecimiento."
            />
            <TramiteCard
              title="Aviso De Funcionamiento (COFEPRIS)"
              description="Requisito sanitario para negocios en salud, alimentos, cosméticos o higiene."
            />
            <TramiteCard
              title="Constancias DC-3 (STPS)"
              description="Documentos que certifican la capacitación del personal ante la Secretaría del Trabajo."
            />
            <TramiteCard
              title="Licencia De Anuncio"
              description="Autorización para instalar publicidad exterior conforme a reglamento municipal."
            />
            <TramiteCard
              title="Licencia De Construcción"
              description="Permiso obligatorio para obras nuevas, remodelaciones o ampliaciones."
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-8 lg:w-1/3 p-6">
            <McBadge variant="orange">TRÁMITES</McBadge>

            <h2 className="text-3xl md:text-4xl font-medium text-primary text-center leading-tight tracking-tight self-stretch">
              Trámites Esenciales Para Operar Legalmente Tu Negocio
            </h2>

            <p className="text-lg font-light text-foreground text-center leading-relaxed self-stretch">
              Te ayudamos a gestionar todos los trámites ante Protección Civil,
              COFEPRIS, STPS y autoridades municipales. Evita sanciones,
              clausuras y retrabajos.
            </p>

            <McButton
              variant="orange"
              size="md"
              className="self-stretch"
              onClick={() => openModal("tramite")}
            >
              Solicitar Trámite Ahora
            </McButton>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="flex flex-col justify-center items-start gap-8 px-28 py-8">
        <div className="flex flex-col justify-center items-center gap-8 p-6 self-stretch">
          <McBadge variant="blue">OTROS SERVICIOS</McBadge>

          <h2 className="text-4xl font-medium text-secondary-400 text-center leading-tight tracking-tight capitalize">
            Servicios complementarios para tu seguridad y cumplimiento
          </h2>

          <p className="text-xl font-light text-foreground text-center leading-relaxed self-stretch">
            Ofrecemos soluciones adicionales que apoyan la seguridad integral y
            la legalidad de tu establecimiento.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 self-stretch">
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/cc8d4c7314134956abeb4714736b238f40832906?width=736"
            title="Fumigación"
            description="Control profesional de plagas con productos seguros y certificados."
            className="w-96"
          />
          <ServiceCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/a36ba5ccf996392fc7b81839a71bcd1dd1d398ba?width=736"
            title="Recarga y Mantenimiento de Extintores"
            description="Asegura el funcionamiento óptimo de tus extintores con servicio técnico autorizado."
            className="w-96"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="flex flex-col items-center gap-8 px-28 py-20">
        <div className="flex flex-col justify-center items-center gap-8 p-4 self-stretch">
          <McBadge variant="orange">PRODUCTOS</McBadge>

          <h2 className="text-4xl font-medium text-primary text-center leading-tight tracking-tight capitalize self-stretch">
            Venta de equipos, Señalamientos y protección personal
          </h2>

          <p className="text-xl font-light text-foreground text-center leading-relaxed self-stretch">
            Equipamos tu negocio con productos certificados para emergencias y
            cumplimiento normativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          <ProductCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
            category="Equipo de Protección Personal (EPP)"
            title="Cascos de seguridad con certificación NOM"
            description="Obligatorios en obras y zonas industriales"
            className="h-full"
          />
          <ProductCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800"
            category="Señalamientos"
            title="Señalamientos de emergencia fotoluminiscentes"
            description="Rutas de evacuación, salidas de emergencia, zonas de seguridad"
            className="h-full"
          />
          <ProductCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800"
            category="Equipos de Emergencia"
            title="Extintores recargados con ficha técnica"
            description="Agua, polvo químico seco, CO₂, para distintos tipos de fuego"
            className="h-full"
          />
          <ProductCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800"
            category="Complementos para Protección y Respuesta"
            title="Cinta de precaución y acordonamiento"
            description="Para delimitar áreas peligrosas o restringidas"
            className="h-full"
          />
        </div>

        <McButton
          variant="orange"
          size="md"
          className="self-stretch"
          onClick={() => (window.location.href = "/catalogo")}
        >
          Ver Catálogo Completo
        </McButton>
      </section>

      {/* Contact Section with Google Maps */}
      <footer
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
      </footer>
    </div>
  );
}
