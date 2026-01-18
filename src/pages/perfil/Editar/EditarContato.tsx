import { Link, useNavigate } from "react-router-dom";
import "./Editar.css";
import { useEffect, useState, type FormEvent } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";
import api from "../../../services/api";
import { buscarDados } from "../../../Hooks/buscarDados";

export const EditarContato = () => {
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navegar = useNavigate();

  useEffect(() => {
    const Dados = async () => {
      const response = await buscarDados("/clientes");

      setEmail(response.contato.email);
      setTel(response.contato.telefone);
      console.log(response);
    };
    Dados();
  }, []);

  const AtualizarDados = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await api.patch(
        "clientes/update",
        {
          contato: {
            email: email,
            telefone: tel,
          },
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
          <h2 className="tituloEditar">Nome e sobre Nome</h2>
        </div>
        <form onSubmit={AtualizarDados}>
          <div className="inputBox">
            <label htmlFor="Nome">Email:</label>
            <input
              type="text"
              id="Nome"
              value={email}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="inputBox_sobre">
            <label htmlFor="SobreNome">Telefone:</label>
            <input
              type="text"
              id="SobreNome"
              value={tel}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setTel(e.target.value);
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
