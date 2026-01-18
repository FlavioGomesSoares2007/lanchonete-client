import { useState, type FormEvent } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const navigater = useNavigate();

  const fazerLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(false);
    try {
      const response = await api.post("auth/login", {
        email: email,
        senha: senha,
      });
      if (response) {
        localStorage.setItem("token", response.data.access_token);

        navigater("/cardapio");
      }
    } catch (error) {
      console.log(`tivemos algum erro na busca do perfil ${error}`);
    } finally {
      setLoading(true);
    }
  };

  return (
    <>
      <div className="fundo_login">
        <div id="conteiner">
          <form onSubmit={fazerLogin}>
            <h2 className="titulo">Login</h2>
            <div className="inputBox">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="inputBox">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSenha(e.target.value)
                }
              />
            </div>

            <button type="submit">{loading ? "Login" : "carregando..."}</button>
            <p className="caractere">
              Ainda não possui conta? <Link to="/cadastrar">Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
