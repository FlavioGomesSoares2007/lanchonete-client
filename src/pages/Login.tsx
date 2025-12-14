import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaUser, FaLock, FaIdCard } from "react-icons/fa";

// Seu import atualizado (lembre de renomear o arquivo para Login.css)
import "./style/Login.css"; 

interface Userdata {
  nome: string;
  sobrenome: string;
  password: string;
}

export const Login = () => {
  const [formData, setFormData] = useState<Userdata>({
    nome: '',
    sobrenome: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviando:", formData);
  };

  return (
    // Agora usamos strings normais: "container" em vez de {styles.container}
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Acessar Conta</h2>
        
        {/* Nome */}
        <div className="inputWrapper">
          <FaUser className="icon" />
          <input 
            type="text" 
            placeholder="Seu Nome"
            name="nome" 
            value={formData.nome} 
            onChange={handleChange}
            className="inputField"
          />
        </div>

        {/* Sobrenome */}
        <div className="inputWrapper">
          <FaIdCard className="icon" />
          <input 
            type="text" 
            placeholder="Seu Sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="inputField"
          />
        </div>

        {/* Senha */}
        <div className="inputWrapper">
          <FaLock className="icon" />
          <input 
            type="password" 
            placeholder="Sua Senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="inputField"
          />
        </div>

        <button type="submit" className="button">Entrar</button>
      </form>
    </div>
  );
};