import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <Link to="/home">inicio</Link>
                <Link to="/loja">loja</Link>
                <Link to="/contato">contato</Link>
                <Link to="/sobre">sobre</Link>
            </ul>
        </nav>

    )
}
export default Navbar