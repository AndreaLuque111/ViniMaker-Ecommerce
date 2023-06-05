import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Compra en cualquier momento
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        ¡Bienvenidos a nuestra tienda de discos en línea! Aquí encontrarás una amplia selección de música en todos los géneros y formatos. Desde los clásicos hasta los últimos lanzamientos, tenemos algo para todos los gustos. Navega por nuestro catálogo y descubre tu próxima adquisición musical. 
        ¡Gracias por elegirnos!💽
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="productlist max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
