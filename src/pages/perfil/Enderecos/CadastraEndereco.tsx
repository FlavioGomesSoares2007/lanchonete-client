import { useState, type FormEvent } from "react";
import "./style/CadastraEndereco.css";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
export const CadastraEndereco = () => {
  const [cep, setCep] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [nomeRua, setNomeRua] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");

  const navegar = useNavigate();

  const enviarDados = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    try {
      await api.post(
        "/clientes/endereco",
        {
          cep: cep,
          cidade: cidade,
          estado: estado,
          bairro: bairro,
          numero: numero,
          logradouro: nomeRua,
          complemento: complemento,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navegar("/meusEnderecos");
    } catch(error) {
        console.log(`error ao cadastrar endereco ${error}`)
    }
  };
  return (
    <>
      <div className="conteinerEndereco">
        <form onSubmit={enviarDados}>
          <div className="inputBox">
            <label htmlFor="cep">Cep:</label>
            <input
              type="text"
              id="cep"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCep(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCidade(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEstado(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="bairro">Bairro:</label>
            <input
              type="text"
              id="bairro"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setBairro(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="numero">Numero:</label>
            <input
              type="text"
              id="numero"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNumero(e.target.value);
              }}
            />
          </div>
          <div className="inputBoxEndereco">
            <label htmlFor="nomeRua">Nome Da Rua:</label>
            <input
              type="text"
              id="nomeRua"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNomeRua(e.target.value);
              }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              id="complemento"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setComplemento(e.target.value);
              }}
            />
          </div>

          <button type="submit">
            <strong>Cadastar</strong>
          </button>
        </form>
      </div>
    </>
  );
};
