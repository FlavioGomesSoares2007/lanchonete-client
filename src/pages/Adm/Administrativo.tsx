import { Link } from "react-router-dom";
import "./Administrativo.css";

export const Administrativo = () => {
  return (
    <>
      {/* 1. O AVISO (Só aparece no celular) */}
      <div className="aviso-mobile">
        <h1> Acesso Bloqueado</h1>
        <p>O Painel Administrativo só pode ser acessado pelo Computador.</p>
      </div>

      {/* 2. O PAINEL (Só aparece no PC) */}
      <div id="conteinerAdm">
        <div className="cabecalhoAdm">
          <h1>Painel do Gerente</h1>
        </div>

        <div className="menu-opcoes">
          <Link className="botaoAdm" to={"/ingredientes"}>
             Gerenciar Ingredientes
          </Link>

          <Link className="botaoAdm" to={"/cadastrarCategoria"}>
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