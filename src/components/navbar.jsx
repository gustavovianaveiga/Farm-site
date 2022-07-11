import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className='navbar'>
            <img src="/src/img/farm-logo.png" alt="farmlogo" />
            <div className='links'>
                <ul>
                    <Link to="/home">inicio</Link>
                    <Link to="/loja">loja</Link>
                    <Link to="/contato">contato</Link>
                    <Link to="/sobre">sobre</Link>
                    <div className='menux'>
                        <ul></ul>
                    </div>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar