import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./Navegacao.css";

export const Cardapio = () => {
  return (
    <>
      <Logo />
      <nav>
        <Link className="ativo" to="/">Cardapio</Link>
        <Link to="/pedidos">Pedidos</Link>
        <Link to="/perfil">Perfil </Link>
      </nav>

    </>
  );
};
