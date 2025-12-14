import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./style/Navegacao.css";

export const Perfil = () => {
  return (
    <>
      <Logo />
      <nav>
        <Link to="/">Cardapio</Link>
        <Link  to="/pedidos">Pedidos</Link>
        <Link className="ativo" to="/perfil">Perfil </Link>
      </nav>

    </>
  );
};