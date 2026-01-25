import { Link } from "react-router-dom";
import "./style/Ingrediente.css";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export const Ingrediente = () => {
  const [confirmaApagar, setConfirmaApagar] = useState<boolean>(false);
  const [ingredientes, setIngredientes] = useState<[]>([]);

  const [id_ingrediente, setId_ingrediente] = useState<number>(0);
  const [nomeIngrediente, setNomeIngrediente] = useState<string>('');


  useEffect(() => {
    const dados = async () => {
      try {
        const response = await api.get("ingrediente");

        if (response) {
          setIngredientes(response.data);
        }
      } catch (error) {
        console.log(`error ao buscar os dados ${error}`);
      }
    };
    dados();
  }, []);

  const aviso = (id: number, nome:string) => {
    setConfirmaApagar(true);
    setId_ingrediente(id);
    setNomeIngrediente(nome)
  };
  const canselar = () => {
    setConfirmaApagar(false);
    setId_ingrediente(0);
  };

  const apagar = async (id: number) => {
    try {
      await api.delete(`ingrediente/${id}`);
       window.location.reload();
    } catch (error) {
        console.log(`error ao apagar ${error}`);
        
    }
  };
  return (
    <>
      <div id="apagarConfirma">
        {confirmaApagar ? (
          <div id="conteinerConfirma">
            <h2>Atençao</h2>
            <p>
              Ao apagar este ingrediente <strong>{nomeIngrediente}</strong>, todos os lanches que usam ele também
              serão apagados
            </p>
            <button onClick={canselar}>Cancelar</button>
            <button
              onClick={()=>apagar(id_ingrediente)}
            >
              Apagar
            </button>
          </div>
        ) : (
          <div id="divNone"></div>
        )}
      </div>
      <div id="conteinerIngredientes">
        <div id="cabecalhoIngredientes">
          <h2>Ingredientes</h2>
        </div>
        <div id="ingredientes">
          {ingredientes.map((dados: any) => (
            <div key={dados.id_ingrediente} id="cartaoIngrediente">
              <div id="nome">
                <span>
                  <strong>{dados.nome}</strong>
                </span>
              </div>
              <div className="dados">
                <span>{dados.quantidade}</span>
              </div>
              <div className="dados">
                <span>{dados.unidade}</span>
              </div>
              <Link to={`/atualizar/ingrediente/${dados.id_ingrediente}`} id="updateIngrediente">
                atualizar
              </Link>

              <button
                id="apagarIngrediente"
                onClick={() => aviso(dados.id_ingrediente, dados.nome)}
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
        <Link className="cadastra" to={"/cadastrar/ingredientes"}>
          {" "}
          Cadastrar
        </Link>
      </div>
    </>
  );
};
