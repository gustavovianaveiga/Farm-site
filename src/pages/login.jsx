import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="login">
            <img src='/src/img/farm-logo.png' alt="farm-logo" width="50px" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="senha" placeholder="senha" />
            <input type="submit" value="Entrar" />
            <p>Não tem uma conta?  <Link to="/criar-conta">Clique aqui!</Link></p>

        </div>
    )
}
export default Login