import "./Cardapio.css";

import { AiFillHome } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";

export const Cardapio = () => {

  return (
    <>
      <nav id="menu">
        <Link className="ativo" to={"/cardapio"}>
          <AiFillHome />
        </Link>
        <Link to={"/procura"}>
          <HiMagnifyingGlass />
        </Link>
        <Link to={"/perfil"}>
          <AiOutlineShoppingCart />
        </Link>
        <Link to={"/perfil"}>
          <FaUserLarge />
        </Link>
      </nav>
    </>
  );
};
