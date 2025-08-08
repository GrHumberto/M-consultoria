import { useState } from "react";
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceType?: "dictamen" | "tramite";
}

export function ServiceModal({
  isOpen,
  onClose,
  defaultServiceType = "dictamen",
}: ServiceModalProps) {
  const [serviceType, setServiceType] = useState<"dictamen" | "tramite">(
    defaultServiceType,
  );
  const [formData, setFormData] = useState({
    serviceSubtype: "",
    email: "",
    name: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    phone: "",
    companyName: "",
    location: "",
    comments: "",
  });

  const dictamenOptions = [
    "Dictamen Eléctrico",
    "Dictamen Estructural",
    "Dictamen de Sonido",
    "Dictamen de Gas",
    "Dictamen de Riesgo",
    "Dictamen Hidráulico",
  ];

  const tramiteOptions = [
    "Factibilidad De Uso Y Destino De Suelo",
    "Licencia De Funcionamiento",
    "Aviso De Funcionamiento (COFEPRIS)",
    "Constancias DC-3 (STPS)",
    "Licencia De Anuncio",
    "Licencia De Construcción",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", { serviceType, ...formData });
    // Aquí se procesaría el formulario
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Tipo De Servicio
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Type Selection */}
            <div className="flex gap-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="serviceType"
                  value="dictamen"
                  checked={serviceType === "dictamen"}
                  onChange={(e) => setServiceType(e.target.value as "dictamen")}
                  className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-lg font-medium text-gray-700">
                  Dictamen
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="serviceType"
                  value="tramite"
                  checked={serviceType === "tramite"}
                  onChange={(e) => setServiceType(e.target.value as "tramite")}
                  className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <span className="text-lg font-medium text-gray-700">
                  Tramite
                </span>
              </label>
            </div>

            {/* Service Subtype */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {serviceType === "dictamen"
                  ? "Tipo De Dictamen"
                  : "Tipo De Tramite"}
              </h3>
              <select
                value={formData.serviceSubtype}
                onChange={(e) =>
                  handleInputChange("serviceSubtype", e.target.value)
                }
                className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">Servicio</option>
                {(serviceType === "dictamen"
                  ? dictamenOptions
                  : tramiteOptions
                ).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Data Section */}
            <div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  Datos de Contacto
                </h3>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="ejemplo@e-mail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre (s)
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre (s)"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Apellidos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido Paterno
                    </label>
                    <input
                      type="text"
                      placeholder="Apellido Paterno"
                      value={formData.apellidoPaterno}
                      onChange={(e) =>
                        handleInputChange("apellidoPaterno", e.target.value)
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido Materno
                    </label>
                    <input
                      type="text"
                      placeholder="Apellido Materno"
                      value={formData.apellidoMaterno}
                      onChange={(e) =>
                        handleInputChange("apellidoMaterno", e.target.value)
                      }
                      className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono de contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="0000-00-00-00"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company Data Section */}
            <div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 text-center">
                  Datos de Empresa
                </h3>
              </div>

              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de la empresa"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ubicación del inmueble o negocio
                  </label>
                  <input
                    type="text"
                    placeholder="Ubicación"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios o detalles adicionales
                  </label>
                  <textarea
                    placeholder="Comentario"
                    value={formData.comments}
                    onChange={(e) =>
                      handleInputChange("comments", e.target.value)
                    }
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
