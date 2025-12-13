import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./Navegacao.css";

export const Pedidos = () => {
  return (
    <>
      <Logo />
      <nav>
        <Link to="/">Cardapio</Link>
        <Link className="ativo" to="/pedidos">Pedidos</Link>
        <Link to="/perfil">Perfil </Link>
      </nav>

    </>
  );
};