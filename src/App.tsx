import { Route,  Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar";
import { Perfil } from "./pages/perfil/Perfil";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastrar/>}/>
        <Route path="/cardapio" element={<Cardapio/>}/>
        <Route path="/perfil" element={<Perfil/>}/>

    </Routes>
  );
}
export default App;
