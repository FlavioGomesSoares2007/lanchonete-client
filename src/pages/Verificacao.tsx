import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "./style/Navegacao.css";

export const Verificacao = () => {
  return (
    <>
      <Logo />
       <button id="login">
        <Link to="/login"><div>Entrar</div></Link>
      </button>
    </>
  );
};