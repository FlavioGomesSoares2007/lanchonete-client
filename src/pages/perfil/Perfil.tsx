import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./Perfil.css";

export const Perfil = () => {
  return (
    <>
      <div id="configuracao">
        <div className="cabecalho">
        <p>olá, xxxx</p>
        <p>cod: xxxxxx</p>
        </div>

      </div>

      <nav id="menu">
        <Link to={"/cardapio"}>
          <AiFillHome />
        </Link>
        <Link to={"/procura"}>
          <HiMagnifyingGlass />
        </Link>
        <Link to={"/perfil"}>
          <AiOutlineShoppingCart />
        </Link>
        <Link className="ativo" to={"/perfil"}>
          <FaUserLarge />
        </Link>
      </nav>
    </>
  );
};
