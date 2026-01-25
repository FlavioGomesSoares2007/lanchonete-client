import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Cardapio } from "./pages/Cardapio/Cardapio";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar";
import { Perfil } from "./pages/perfil/Perfil";
import { EditarPerfil } from "./pages/perfil/Editar/EditarPerfil";
import { EditarContato } from "./pages/perfil/Editar/EditarContato";
import { EditarCodigo } from "./pages/perfil/Editar/EditarCodigo";
import { MeusEnderecos } from "./pages/perfil/Enderecos/MeusEnderecos";
import { CadastraEndereco } from "./pages/perfil/Enderecos/CadastraEndereco";
import { Administrativo } from "./pages/Adm/Administrativo";
import { Categoria } from "./pages/Adm/Categoria/Categoria";
import { CadastrarCategoria } from "./pages/Adm/Categoria/CadastrarCategoria";
import { Ingrediente } from "./pages/Adm/Ingrediente/Ingrediente";
import { CadastrarIngrediente } from "./pages/Adm/Ingrediente/CadastrarIngrediente";
import { UpdateIngrediente } from "./pages/Adm/Ingrediente/UpdateIngrediente";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/editar/perfil" element={<EditarPerfil />} />
      <Route path="/editar/contato" element={<EditarContato />} />
      <Route path="/editar/codigo" element={<EditarCodigo />} />
      <Route path="/meusEnderecos" element={<MeusEnderecos />} />
      <Route path="/cadastraEndereco" element={<CadastraEndereco />} />
      <Route path="/adm" element={<Administrativo />} />
      <Route path="/categorias" element={<Categoria />} />
      <Route path="/cadastrar/categorias" element={<CadastrarCategoria />} />
      <Route path="/ingredientes" element={<Ingrediente />} />
      <Route path="/cadastrar/ingredientes/" element={<CadastrarIngrediente />} />
      <Route path="/atualizar/ingrediente/:id" element={<UpdateIngrediente />} />

    </Routes>
  );
}
export default App;
