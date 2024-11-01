import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Snapshop Logo"
            className="w-10 h-10 mr-3"
          />
          <Link to="/" className="text-white text-2xl font-bold">
            Snapshop
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/brands"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded"
            >
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
