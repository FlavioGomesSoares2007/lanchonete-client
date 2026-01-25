import React, { useEffect, useState, type FormEvent } from "react";
import "./style/cadastrarIngrediente.css";
import api from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateIngrediente = () => {
  const [nome, setNome] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [unidade, setUnidade] = useState<string>("un");


  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const navegar = useNavigate();

  useEffect(() => {
    const ingrediente = async () => {
     const dados = await api.get(`ingrediente/unico/${id}`);
      setNome(dados.data.nome)
      setQuantidade(dados.data.quantidade)
      setUnidade(dados.data.unidade)
      
    };
    ingrediente()
  }, []);

  const enviarDados = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.patch(`ingrediente/${id}`, {
        nome: nome,
        quantidade: Number(quantidade),
        unidade: unidade,
      });
      navegar("/ingredientes");
    } catch (error) {
      console.log(`erro ao enviar os dados: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={enviarDados}>
      <div id="conteinerCriarIngrediente">
        <div id="cabecalhoCadastrarIngrediente">
          <h2>cadastrar ingrediente</h2>
        </div>

        <div className="inputBox">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNome(e.target.value);
            }}
            placeholder="Ex: Queijo"
            required
          />
        </div>

        <div className="inputBox">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuantidade(e.target.value);
            }}
            placeholder="Ex: 10"
            min={0}
            required
          />
        </div>

        <div className="inputBox">
          <label htmlFor="unidade">Unidade:</label>
          <select
            id="unidade"
            value={unidade}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setUnidade(e.target.value);
            }}
            required
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
            <option value="un">un</option>
            <option value="fatia">fatia</option>
          </select>
        </div>

        <div id="divCadastarIngrediente">
          <button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  );
};
