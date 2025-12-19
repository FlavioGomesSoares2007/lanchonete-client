import { useState, type FormEvent } from "react";
import { api } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./style/contato.css";

export const Contato = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  
  const [ddi, setDdi] = useState("+55"); 
  const [ddd, setDdd] = useState("84");
  const [numero, setNumero] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!id) return;

    const telefoneCompleto = `${ddi}${ddd}${numero}`;

    try {
      await api.post(`/contatos/add/${id}`, {
        email,
        telefone: telefoneCompleto
      });
      
      alert("Cadastro finalizado com sucesso!");
      navigate('/login'); 
      
    } catch (error) {
      alert("Erro ao salvar contato.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Finalizar Cadastro</h2>
        
        <div className="inputWrapper">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
            required
          />
        </div>

        <div className="inputWrapper">
          <FaPhone className="icon icon-flipped" />

          <input
            type="text"
            value={ddi}
            onChange={(e) => setDdi(e.target.value)}
            className="ddi-input"
            maxLength={4} 
            required
          />

          <input
            type="text"
            placeholder="DDD"
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
            className="ddd-input"
            maxLength={2}
            required
          />

          <input
            type="tel"
            placeholder="99999-9999"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="number-input"
            required
          />
        </div>

        <button type="submit" className="button">Concluir Cadastro</button>
      </form>
    </div>
  );
};