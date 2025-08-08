import { useState } from "react";
import { cn } from "@/lib/utils";
import { McButton } from "./mc-button";
import { ProductDetailsModal } from "./product-details-modal";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  className?: string;
}

export function ProductCard({
  image,
  category,
  title,
  description,
  className,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-1 flex-col justify-center items-start border border-gray-200 rounded-2xl",
          className,
        )}
      >
        <img
          src={image}
          alt={title}
          className="flex-1 w-full rounded-t-2xl object-cover"
        />
        <div className="flex flex-col justify-center items-start gap-4 self-stretch p-6 bg-white rounded-b-2xl">
          <p className="text-sm text-secondary-500 leading-relaxed">
            {category}
          </p>
          <h3 className="text-xl text-secondary-600 leading-tight line-clamp-1">
            {title}
          </h3>
          <p className="text-base font-light text-secondary-600 leading-relaxed line-clamp-1">
            {description}
          </p>
          <McButton
            variant="outline-blue"
            size="sm"
            className="w-full"
            onClick={openModal}
          >
            Solicitar Producto
          </McButton>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={{
          image,
          title,
          category,
          description,
        }}
      />
    </>
  );
}
