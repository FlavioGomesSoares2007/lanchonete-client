import React, { useState, type FormEvent } from "react";
import "./style/cadastrarCategoria.css";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
export const CadastrarCategoria = () => {
  const [previa, setPrevia] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  const [loading, setLoadin] = useState<boolean>(false);

  const navegar = useNavigate();

  const lidarComImg = (e: any) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const img = URL.createObjectURL(arquivo);
      setImagem(arquivo);
      setPrevia(img);
    }
  };
  const enviarDados = async (e: FormEvent) => {
    e.preventDefault();
    setLoadin(true);
    try {
      const dados = new FormData();
      dados.append("nome", nome);
      dados.append("imagem", imagem);
      await api.post("categoria", dados);
      navegar("/categorias");
    } catch (error) {
      console.log(`error ao enviar os dados ${error}`);
    } finally {
      setLoadin(false);
    }
  };
  return (
    <form onSubmit={enviarDados}>
      <div id="conteinerCriarCatecoria">
        <div id="cabecalhoCadastrarCategoria">
          <h2>cadastrar categoria</h2>
        </div>
        <div className="inputBox">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNome(e.target.value);
            }}
          />
        </div>
        <div className="inputBoxImg">
          <div id="btnCategoria">
            <label htmlFor="img">Escolher Foto</label>
            <input
              type="file"
              accept="image/*"
              id="img"
              onChange={lidarComImg}
            />
          </div>
          <div id="divImagem">
            {previa ? (
              <img src={previa} alt="foto escolhida" />
            ) : (
              <p>
                <strong>sem foto</strong>
              </p>
            )}
          </div>
        </div>
        <div id="divCadastarCategoria">
          <button type="submit">
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  );
};
