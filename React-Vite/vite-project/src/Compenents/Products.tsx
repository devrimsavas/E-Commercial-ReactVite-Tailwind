import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number | string;
  quantity: number;
  date_added: Date | string;
  imgurl: string;
  status: string;
  isDeleted: boolean;
  discount: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  BrandId: number;
  CategoryId: number;
  brand: string;
  category: string;
}

const Products = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.data.products);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.imgurl || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <p className="text-gray-800 dark:text-gray-100 font-bold">
                ${product.price}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.brand} - {product.category}
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
