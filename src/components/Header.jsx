import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const Header = () => {

  let {total_item} = useCartContext();
  return (
    <>
      <div className="flex justify-between has-[40px] px-2 py-2 bg-gray-500">
        <div className="w-[35px] bg-white rounded-sm">
          <img className="rounded-sm" src="./amazonlogo.png" alt="Logo" />
        </div>

        <ul className="flex justify-evenly items-center w-[500px] rounded-md text-white">
          <li>
            <NavLink className="link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="link flex items-center" to="/cart">
            <FiShoppingCart/>
            <span>{total_item}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
