import { useNavigate } from "react-router-dom";

export const exit = () => {
  
      const navigate = useNavigate();

  const sair = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("nome");
    localStorage.removeItem("sobre_nome");
    navigate("/");
    window.location.reload();
  };
    return sair;
}
