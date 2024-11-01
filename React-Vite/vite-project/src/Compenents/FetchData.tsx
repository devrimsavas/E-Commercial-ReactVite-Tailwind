import { useState } from "react";

interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const GetData = () => {
  const [categoryArray, setCategoryArray] = useState<Category[]>([]);

  const FetchData = () => {
    fetch("http://localhost:3000/category")
      .then((response) => response.json())
      .then((data) => {
        setCategoryArray(data.data.categories); // Assuming your JSON structure
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <button type="button" onClick={FetchData}>
        PRESS
      </button>
      <ul>
        {categoryArray.map((category) => (
          <li key={category.id}>
            {category.name} - Created At:{" "}
            {new Date(category.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetData;
