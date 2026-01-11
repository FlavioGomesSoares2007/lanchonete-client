import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  FaUserEdit,
  FaAddressBook,
  FaMapMarkerAlt,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./Perfil.css";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { buscarDados } from "../../Hooks/BuscarDados";


export const Perfil = () => {
  
const [nome, setNome] = useState<string>("");

const navegar = useNavigate()

useEffect(() => {
  const Dados = async () => {
    const response = await buscarDados("/clientes")
 
    setNome(response.nome);
  };
  Dados()
}, []);

const exit = ()=>{
  localStorage.clear()
  navegar("/")
}
  return (
    <>
      <div id="configuracao">
        <div className="cabecalho">
          <p>olá, {nome===""? "carregando...": nome}</p>
          <p className="cod">cod: xxxxxx</p>
        </div>
        <Link className="conficuracos" to={"/editar/perfil"}>
          <FaUserEdit size={18} />
          Editar Perfil
        </Link>
        <Link className="conficuracos" to={"/perfi"}>
          <FaAddressBook size={18} />
          Editar Contato
        </Link>
        <Link className="conficuracos" to={"/perfi"}>
          <FaMapMarkerAlt size={18} />
          Cadastrar Endereços
        </Link>
        <Link className="conficuracos" to={"/perfi"}>
          <FaKey size={18} />
          Editar Codigo
        </Link>
        <button onClick={exit} className="exit">
          Sair
          <FaSignOutAlt size={18} />
        </button>
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
