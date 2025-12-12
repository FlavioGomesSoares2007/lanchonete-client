import { Link } from "react-router-dom";
export const Navegacao = () => {
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/pedidos">pedidos</Link>
        <Link to="/perfil">perfil </Link>
      </nav>
    </div>
  )
}
