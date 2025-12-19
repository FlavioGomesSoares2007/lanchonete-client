import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./style/Navegacao.css";
import { RiUserFill } from "react-icons/ri";
import { exit } from "../services/exit";

export const Perfil = () => {
  const nome = localStorage.getItem("nome");
  const sobre_nome = localStorage.getItem("sobre_nome");

  const sair = exit();

  return (
    <>
      <Logo />
      <nav>
        <Link to="/">Cardapio</Link>
        <Link className="ativo" to="/perfil">
          Perfil
        </Link>
      </nav>

      <div>
        <h1>
          {nome} {sobre_nome}
        </h1>
        <div>
          <RiUserFill />
          <Link to="/perfil/editar">edite o nome</Link>
        </div>
        <div>
          <button onClick={sair}>Sair</button>
        </div>
      </div>
    </>
  );
};
