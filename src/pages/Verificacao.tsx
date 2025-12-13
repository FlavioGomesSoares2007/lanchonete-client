import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./Navegacao.css";

export const Verificacao = () => {
  return (
    <>
      <Logo />
      <div id="login">
        <Link  to="/login">Entrar</Link>
      </div>

    </>
  );
};