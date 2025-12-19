import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./style/Navegacao.css";
import { authService } from "../services/authService";

export const Cardapio = () => {
  authService();
  return (
    <>
      <Logo />
      <nav>
        <Link className="ativo" to="/">Cardapio</Link>
        <Link to="/perfil">Perfil </Link>
      </nav>

    </>
  );
};
