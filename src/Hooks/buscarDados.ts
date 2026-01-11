import api from "../services/api";

export async function buscarDados(url: string) {
  const token = localStorage.getItem("token");

  try {
    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
    
    return response.data; 

  } catch (error) {
    console.log(`Ocorreu um erro ao buscar ${url}: ${error}`);
    return null;
  }
}