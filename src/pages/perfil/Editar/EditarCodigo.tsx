import { Link, useNavigate } from "react-router-dom";
import "./Editar.css";
import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import api from "../../../services/api";
import { buscarDados } from "../../../Hooks/buscarDados";

export const EditarCodigo = () => {
  const [codigo, setCodigo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navegar = useNavigate();

  useEffect(() => {
    const Dados = async () => {
      const response = await buscarDados("/clientes");

      setCodigo(response.codigo);
      console.log(response);
    };
    Dados();
  }, []);

  const AtualizarDados = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await api.patch(
        "clientes/update",
        {
          codigo: codigo
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navegar("/perfil");
    } catch (error) {
      console.log(`ocorreu um erro ao atualizar os dados ${error}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div id="conteiner_editar">
        <div className="cabecalho">
          <h2 className="tituloCodigo">Codigo</h2>
        </div>
        <form onSubmit={AtualizarDados}>
          <div className="inputBox">
            <label htmlFor="Nome">Codigo:</label>
            <input
              type="text"
              id="Nome"
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
              }}
            />
          </div>
          <button type="submit">
            {loading ? "Atualizando..." : "Atualizar"}
          </button>
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
