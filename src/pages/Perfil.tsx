import { Logo } from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import "./style/Navegacao.css";
import { api } from "../services/api";


export const Perfil = () => {
  
const navigate = useNavigate();

const sair = () => {
  localStorage.removeItem("email");
  navigate("/");
  window.location.reload();
}

const procurar = async () => {
  try {
    const emailParaEnviar = "apolouhora666@gmail.com";


    const resposta = await api.post("/api/dados/buscar", { 
      email: emailParaEnviar 
    });

    console.log("O que chegou do Back:", resposta.data); 

  } catch (error) {
    console.error("Deu erro na busca:", error);
  }
}
  return (
    <>
      <Logo />
      <nav>
        <Link to="/">Cardapio</Link>
        <Link  to="/pedidos">Pedidos</Link>
        <Link className="ativo" to="/perfil">Perfil </Link>
      </nav>

      <div>
        <h1>Perfil</h1>
        <button onClick={sair}>
          <h2>sair</h2>
        </button>
        <button onClick={procurar}> 
          <h2>procurar</h2>
        </button>
      </div>

    </>
  );
};