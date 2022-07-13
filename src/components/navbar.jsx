import { Link } from "react-router-dom";
function Navbar() {
    function botaox() {
        const $navbar = document.querySelector(".navbar");
        const $x = document.querySelector(".menux");
        const $img = document.querySelector(".logonavbar");
        const $links = document.querySelector(".links");
        const $hamburguer = document.querySelector('.hamburguer');

        setTimeout(() => { $hamburguer.style.opacity = '1'; }, 200);
        $x.style.marginLeft = '-50px';
        $x.style.opacity = '0';
        $img.style.marginLeft = '-50px';
        $img.style.opacity = '0';
        $links.style.marginLeft = '-100px';
        $links.style.opacity = '0';
        $navbar.style.width = "0px";

    };
    return (
        <nav className='navbar'>
            <img src="/src/img/farm-logo.png" alt="farmlogo" className='logonavbar' />
            <div className='links'>
                <ul>
                    <Link to="/home">inicio</Link>
                    <Link to="/loja">loja</Link>
                    <Link to="/contato">contato</Link>
                    <Link to="/sobre">sobre</Link>
                </ul>
            </div>
            <div className='menux' onClick={botaox}>
                <ul></ul>
            </div>
        </nav>

    )
}
export default Navbar