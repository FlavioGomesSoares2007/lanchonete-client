import { Link } from "react-router-dom";
import "./style/Categoria.css";
import { useEffect, useState } from "react";
import api from "../../../services/api";
export const Categoria = () => {
  const [categorias, setCategorias] = useState<[]>([]);

  useEffect(() => {
    const dados = async () => {
      try {
      } catch (error) {
        console.log(`ocorreu um error ao buscar os dados ${error}`);
      }
      const response = await api.get("categoria");
      if (response) {
        setCategorias(response.data);
      }

      console.log(response.data);
    };

    dados();
  }, []);

  const apagar = async (id: number) => {
    try {
       await api.delete("categoria", {
        data: {
          id: id,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(`error ao apagar a categoria ${error}`);
    }
  };

  return (
    <>
      <div id="conteinerCatecoria">
        <div id="cabecalhoCategoria">
          <h2>Categorias</h2>
        </div>
        <div id="categorias">
          {categorias.map((dados: any) => (
            <div key={dados.id_categoria} className="cartaoCategoria">
              {" "}
              <img src={dados.imagem} alt="mini foto da categoria" />{" "}
              <p>
                <strong>{dados.nome}</strong>
              </p>
              <button
                onClick={() => {
                  apagar(dados.id_categoria);
                }}
                className="apagarCategoria"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
        <div className="divCadastar">
          <Link className="cadastra" to={"/cadastrarCategorias"}>
            Cadastrar
          </Link>
        </div>
      </div>
    </>
  );
};
