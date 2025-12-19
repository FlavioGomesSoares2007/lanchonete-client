import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

import "./style/Login.css";

interface UserLoginData {
  email: string;
  senha: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<UserLoginData>({
    email: "",
    senha: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post("/auth/login", formData);
      localStorage.setItem("email", formData.email);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Email ou senha incorretos!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Acessar Conta</h1>

        <div className="inputWrapper">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Seu E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>

        <div className="inputWrapper">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Sua Senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>

        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </button>

        <div className="registerLink">
          <span>Não tem conta? </span>
          <Link to="/cadastro" className="linkCastre-se">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
};
