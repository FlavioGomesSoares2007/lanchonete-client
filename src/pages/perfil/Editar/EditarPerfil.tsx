import { Link, useNavigate } from "react-router-dom";
import "./EditarPerfil.css";
import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import api from "../../../services/api";
import { buscarDados } from "../../../Hooks/BuscarDados";

export const EditarPerfil = () => {
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)

  const navegar = useNavigate()

  useEffect(() => {
    const Dados = async () => {
      const response = await buscarDados("/clientes");

      setNome(response.nome);
      setSobreNome(response.sobre_nome);
      console.log(response)
    };
    Dados();
  }, []);

  const AtualizarDados = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    try {
      const token = localStorage.getItem("token");
      await api.patch(
        "clientes/update",
        {
          nome: nome,
          sobre_nome: sobreNome,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navegar("/perfil")
    } catch(error) {
        console.log(`ocorreu um erro ao atualizar os dados ${error}`)
    }finally{
        setLoading(false)
    }
  };
  return (
    <>
      <div id="conteiner_editar">
        <div className="cabecalho">
          <h2 className="tituloEditar">Nome e sobre Nome</h2>
        </div>
        <form onSubmit={AtualizarDados}>
          <div className="inputBox">
            <label htmlFor="Nome">Nome:</label>
            <input
              type="text"
              id="Nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>
          <div className="inputBox_sobre">
            <label htmlFor="SobreNome">Sobre Nome:</label>
            <input type="text" id="SobreNome" value={sobreNome} onChange={(e)=>{
                setSobreNome(e.target.value)
            }}/>
          </div>
          <button type="submit">{loading? "Atualizando...":"Atualizar"}</button>
        </form>
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
