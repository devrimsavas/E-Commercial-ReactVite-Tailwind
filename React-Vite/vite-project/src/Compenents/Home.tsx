import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number | string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Categories = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    fetch("http://localhost:3000/category")
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data.data.categories);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Categories</h1>
        <button
          onClick={() => setIsListView(!isListView)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isListView ? "Card View" : "List View"}
        </button>
      </div>

      {isListView ? (
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
              <th className="border-b-2 border-gray-300 dark:border-gray-700 p-4 text-left">
                Category ID
              </th>
              <th className="border-b-2 border-gray-300 dark:border-gray-700 p-4 text-left">
                Category Name
              </th>
              <th className="border-b-2 border-gray-300 dark:border-gray-700 p-4 text-left">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="border-b border-gray-300 dark:border-gray-700 p-4">
                  {category.id}
                </td>
                <td className="border-b border-gray-300 dark:border-gray-700 p-4">
                  {category.name}
                </td>
                <td className="border-b border-gray-300 dark:border-gray-700 p-4">
                  This is for admin only
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Category ID: {category.id}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Created: {new Date(category.createdAt).toLocaleDateString()}
                </p>
                <Link
                  to="#"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
