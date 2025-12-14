import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Cardapio } from "./pages/Cardapio";
import { Pedidos } from "./pages/Pedidos";
import { Perfil } from "./pages/Perfil";
import { useState } from "react";
import { Verificacao } from "./pages/Verificacao";
import { Login } from "./pages/Login";



function App() {
  const [usuario] = useState<null | string>(null);

  return (
    <>
      {usuario ? (
        <Routes>
          <Route path="/" element={<Cardapio />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      ) : (
        <Routes> 
          <Route path="/" element={<Verificacao />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
