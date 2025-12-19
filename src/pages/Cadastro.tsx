import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaUser, FaIdCard, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "./style/Login.css";

interface UserRegisterData {
  nome: string;
  sobre_nome: string;
  senha: string;
}

export const Cadastro = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<UserRegisterData>({
    nome: '',
    sobre_nome: '',
    senha: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
   try{
    const response = await api.post('/usuario/add', formData);
   
    const Id = response.data.id_cliente;
    
    if (!Id) {
        alert("Erro: O servidor não retornou o ID do usuário.");
        return;
      }
       alert('Cadastro realizado com sucesso!');
    navigate(`/cadastro/contato/${Id}`);
   }catch(error){
    alert('Erro ao cadastrar. Tente novamente.');
   }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Criar Conta</h1>
      
        
        <div className="inputWrapper">
          <FaUser className="icon" />
          <input 
            type="text" 
            placeholder="Nome"
            name="nome" 
            value={formData.nome} 
            onChange={handleChange}
            className="inputField"
            required 
          />
        </div>

        <div className="inputWrapper">
          <FaIdCard className="icon" />
          <input 
            type="text" 
            placeholder="Sobre nome"
            name="sobre_nome"
            value={formData.sobre_nome}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>

        <div className="inputWrapper">
          <FaLock className="icon" />
          <input 
            type="password" 
            placeholder="Crie uma Senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>

        <button type="submit" className="button">Cadastrar</button>

        <div className="registerLink">
            <span>Já tem uma conta? </span>
            <Link to="/login" className="linkCastre-se">
                Fazer Login
            </Link>
        </div>
      </form>
    </div>
  );
};