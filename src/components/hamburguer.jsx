function Hamburguer() {
    function click() {
        const $hamburguer = document.querySelector('.hamburguer');
        const $navbar = document.querySelector(".navbar");
        const $x = document.querySelector(".menux");
        const $img = document.querySelector(".logonavbar");
        const $links = document.querySelector(".links");

        $hamburguer.style.opacity = '0'
        $x.style.marginLeft = '90px';
        $x.style.opacity = '1';
        $img.style.marginLeft = '90px';
        $img.style.opacity = '1';
        $links.style.marginLeft = '60px';
        $links.style.opacity = '1';
        $navbar.style.width = "210px";
    }
    return (
        <div className="hamburguer" onClick={click}>
            <ul className='botaohamburguer'></ul>
        </div>
    )
}
export default Hamburguer