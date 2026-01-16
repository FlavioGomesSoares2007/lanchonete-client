import { useEffect, useState } from "react";
import "./MeusEnderecos.css";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { buscarDados } from "../../../Hooks/buscarDados";

export const MeusEnderecos = () => {
  const [enderecos, setEnderecos] = useState<[]>([]);

  useEffect(() => {
    const Dados = async () => {
      try {
        const response = await buscarDados("/clientes");

        let listaEnderecos = [];

        if (response.endereco) {
          listaEnderecos = response.endereco;
          setEnderecos(listaEnderecos);
          console.log(listaEnderecos);
        }
      } catch (error) {
        console.error("Deu ruim na busca:", error);
      }
    };
    Dados();
  }, []);
  return (
    <>
      <div id="conteinerEnderecos">
        <div className="cabecalhoEnderecos">
          <h2>Endereços</h2>
        </div>
        <div id="enderecos">
          {enderecos.map((dados: any) => (
            <div key={dados.id_endereco} className="cartaoEnderecos">
              <p><strong>Rua:</strong> {dados.logradouro}</p>
              <p><strong>Numero:</strong> {dados.numero}</p>
              <p><strong>Bairro:</strong> {dados.bairro}</p>
              <Link id="Atualizar" to={"/atualizar"}>Atualizar</Link>
              <button  id="apagar">Apagar</button>
            </div>
          ))}
        </div>
        <Link className="CadastraEndereco" to={"/cadastraEndereco"}>
          cadastrar
        </Link>
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
