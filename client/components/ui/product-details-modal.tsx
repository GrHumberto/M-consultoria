import { useState } from "react";
import { X } from "lucide-react";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    image: string;
    title: string;
    category: string;
    description: string;
  };
}

interface ProductRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

// Second Modal - Product Request
function ProductRequestModal({
  isOpen,
  onClose,
  productTitle,
}: ProductRequestModalProps) {
  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el producto: ${productTitle}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5219611553538?text=${encodedMessage}`, "_blank");
    onClose();
  };

  const handleEmail = () => {
    const subject = `Consulta sobre: ${productTitle}`;
    const body = `Hola,\n\nEstoy interesado en obtener más información sobre el producto: ${productTitle}\n\nGracias.`;
    window.open(
      `mailto:mc.consultoria@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Solicitud De Producto
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            {/* WhatsApp Option */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                WhatsApp
              </h3>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors"
              >
                Enviar WhatsApp
              </button>
            </div>

            {/* Email Option */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Correo Electrónico
              </h3>
              <button
                onClick={handleEmail}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors"
              >
                Enviar Correo Electrónico
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Product Details Modal
export function ProductDetailsModal({
  isOpen,
  onClose,
  product,
}: ProductDetailsModalProps) {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const openRequestModal = () => {
    setIsRequestModalOpen(true);
  };

  const closeRequestModal = () => {
    setIsRequestModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800">
                Detalles Del Producto
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image */}
              <div className="md:w-1/3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="md:w-2/3 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">
                    {product.category}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Usos y Aplicaciones */}
                <div>
                  <h4 className="text-lg font-semibold text-orange-500 mb-3">
                    Usos O Aplicaciones Sugeridas:
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Construcción, electricidad, industria pesada.
                  </p>
                </div>

                {/* Características Principales */}
                <div>
                  <h4 className="text-lg font-semibold text-orange-500 mb-3">
                    Características Principales:
                  </h4>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Fabricados en polietileno de alta densidad.</li>
                    <li>2. Arnés ajustable con sistema de suspensión.</li>
                    <li>3. Opciones eléctricas hasta 20,000V.</li>
                    <li>4. Ventilación superior opcional.</li>
                    <li>5. Cumple NOM-115-STPS.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <div className="mt-8">
              <button
                onClick={openRequestModal}
                className="w-full bg-blue-500 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Solicitar Producto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal - Product Request */}
      <ProductRequestModal
        isOpen={isRequestModalOpen}
        onClose={closeRequestModal}
        productTitle={product.title}
      />
    </>
  );
}
