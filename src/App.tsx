import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Cardapio } from "./pages/Cardapio";
import { Pedidos } from "./pages/Pedidos";
import { Perfil } from "./pages/Perfil";
import { useState } from "react";
import { Verificacao } from "./pages/Verificacao";
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
        <Verificacao />
      )}
    </>
  );
}

export default App;
