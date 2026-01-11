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
import { Link } from "react-router-dom";

import "./Perfil.css";
import api from "../../services/api";
import { useEffect, useState } from "react";


export const Perfil = () => {
  
const [nome, setNome] = useState<string>("");

useEffect(() => {
  const buscarDados = async () => {
    const token = localStorage.getItem('token')
    const response = await api.get("/clientes",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    });
    setNome(response.data.nome);
  };
  buscarDados()
}, []);
  return (
    <>
      <div id="configuracao">
        <div className="cabecalho">
          <p>olá, {nome===""? "carregando...": nome}</p>
          <p className="cod">cod: xxxxxx</p>
        </div>
        <Link className="conficuracos" to={"/perfi"}>
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
        <button className="exit">
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
