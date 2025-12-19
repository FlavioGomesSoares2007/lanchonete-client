import { useEffect } from "react";
import { api } from "./api";

export const authService = () => {
  async function buscarPerfil() {
    try {
      const responseContato = await api.post("/dados/buscar/email", {
        email: localStorage.getItem("email"),
      });
      console.log("dados", responseContato.data);

      const id = responseContato.data.id;
      const responseUsuario = await api.post("/dados/buscar/id", {
        id_cliente: id,
      });
      console.log("dados usuario", responseUsuario.data);
      window.localStorage.setItem("nome", responseUsuario.data.nome);
      window.localStorage.setItem(
        "sobre_nome",
        responseUsuario.data.sobre_nome
      );
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
    }

  
  };
    return   useEffect(() => {
      buscarPerfil();
    }, []); ;
};
