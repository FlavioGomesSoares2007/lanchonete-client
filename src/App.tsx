import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Cardapio } from "./pages/Cardapio";
import { Perfil } from "./pages/Perfil";
import { Login } from "./pages/Login";
import { Contato } from "./pages/Contato";
import { Cadastro } from "./pages/Cadastro";
import { Verificacao } from "./pages/Verificacao";

function App() {
  const [usuarioLogado] = useState(() => {
    return !!localStorage.getItem("email");
  });

  return (
    <Routes>
      {usuarioLogado ? (
        <>
          <Route path="/" element={<Cardapio />} />
          <Route path="/perfil" element={<Perfil />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Verificacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/contato/:id" element={<Contato />} />
        </>
      )}
    </Routes>
  );
}

export default App;
