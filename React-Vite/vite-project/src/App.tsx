import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Compenents/NavBar";
import Home from "./Compenents/Home";
import Brands from "./Compenents/Brands";
import Categories from "./Compenents/Categories";
import Products from "./Compenents/Products";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("Dark mode toggled:", !darkMode);
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="p-2 m-4 bg-gray-800 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/brands" element={<Brands />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
