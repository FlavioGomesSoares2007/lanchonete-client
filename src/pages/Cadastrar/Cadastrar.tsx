import { Link, useNavigate } from "react-router-dom";
import "./Cadastrar.css";
import React, { useState, type FormEvent } from "react";
import api from "../../services/api";
export const Cadastrar = () => {
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [carregar, setCarregar] = useState<boolean>(true);

  const navegar = useNavigate();

  const enviarDados = async (e: FormEvent) => {
    e.preventDefault
    setCarregar(false);
    try {
      const response = await api.post("clientes", {
        nome: nome,
        sobre_nome: sobreNome,
        senha: senha,
        telefone: telefone,
        email: email,
      });
      navegar("/");
    } catch (error) {
      console.log(`o erro foi ${error}`);
    } finally {
      setCarregar(true);
    }
  };
  return (
    <>
      <div className="fundo_cadastrar">
        <div id="conteiner-cadastra">
          <form onSubmit={enviarDados}>
            <h2 className="titulo-cadastra">Cadastra-se</h2>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Nome"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  setNome(e.target.value);
                }}
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Sobre Nome"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  setSobreNome(e.target.value);
                }}
              />
            </div>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Senhar"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  setSenha(e.target.value);
                }}
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                placeholder="Email"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="inputBox">
              <input
                type="tel"
                placeholder="telefone: (xx) xxxxx-xxxx"
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                  setTelefone(e.target.value);
                }}
              />
            </div>

            <button type="submit">
              {carregar ? "Enviar" : "carregando..."}
            </button>
            <p>
              voltar para o <Link to="/">login</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
