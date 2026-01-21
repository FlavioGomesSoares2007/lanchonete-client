import { Link } from "react-router-dom";
import "./Administrativo.css";

export const Administrativo = () => {
  return (
    <>
      <div className="aviso-mobile">
        <h1> Acesso Bloqueado</h1>
        <p>O Painel Administrativo só pode ser acessado pelo Computador ou com a tela cheia.</p>
      </div>

      <div id="conteinerAdm">
        <div className="cabecalhoAdm">
          <h1>Painel do Gerente</h1>
        </div>

        <div className="menu-opcoes">
          <Link className="botaoAdm" to={"/ingredientes"}>
             Gerenciar Ingredientes
          </Link>

          <Link className="botaoAdm" to={"/categorias"}>
             Nova Categoria
          </Link>

          <Link className="botaoAdm" to={"/cadastrarProduto"}>
             Novo Produto (Cardápio)
          </Link>
        </div>
      </div>
    </>
  );
};