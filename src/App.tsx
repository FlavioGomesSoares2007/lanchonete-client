import './App.css'
import { Routes, Route,  } from 'react-router-dom';

import { Logo } from './components/Logo';
import { Navegacao } from './components/Navegacao';


function App() {

  return (
    <>
      <Logo />
      <Navegacao />
      <Routes>
        <Route path='/' element={ <h1>Home</h1> } />
        <Route path='/pedidos' element={ <h1>Pedidos</h1> } />
        <Route path='/perfil' element={ <h1>Perfil</h1> } />
      </Routes>
      
    </>
  )
}

export default App
