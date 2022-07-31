
function Mode() {
    function mudartema() {
        const $lua = document.querySelector('.mode');
        const $header = document.querySelector('.header-flex');
        const $footer = document.querySelector('.footer');
        const $hamburguer = document.querySelector('.hamburguer');
        const $estrutura = document.querySelector('.estrutura');
        const $main = document.querySelector('main');
        const $navbar = document.querySelector(".navbar");
        const $navlinks = document.querySelector('.links ul a');
        const $menux = document.querySelector('.menux ul');
        const $menuxbefore = window.getComputedStyle($menux, '::hover')

        if ($lua.classList == 'mode') {
            $lua.classList = 'mode toggle'

            $header.style.background = 'gainsboro';
            $hamburguer.style.filter = 'invert(100%)'
            $footer.style.background = 'gainsboro'
            $estrutura.style.background = 'gainsboro'
            $main.style.background = 'lightgrey'
            $main.style.color = 'black'
            $navlinks.style.color = 'black'
            $navbar.style.background = 'silver';

            $menux.style.background = 'black'
            $menux.style.setProperty('--colorWhite', 'black')
            //$menuxbefore.style.backgroundColor = 'black';
            console.log($menuxbefore.background);

            $lua.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIidWWS07CUBSGT4lGGOhISERGxp2wA4PL0D342IfuQRegFmIcgAZ2oDNHgiY+BnwOeolt095nlfgnndDzn+/cS3rvL/LfBNwBt8sAA+Drr1U5TDAY2AYaoc2BVaBtW9wGPoAJ0NLUxcCN5n0LGAPvwJYNuK4MmOAG6ET1GANrPsbSVWn8sWnwwv84iqJnEemKyEBEnnIDnQL3wJt6RsBJDvCovF3Vy1/APjCjXDOgFwQpgc410IXmlcHV9upWmtcUaJr62hwghyKy7jDrhogcONQXC3hwWO1CI1Pfmmoe54xxqmbHY97d1OCFvcu22vvwt/Db9Sb5Zn9nqw26tJowqwsPT1a4f04vwGYwWMF72B8ge5VAc/CpYaXhULXFA+As9VsTOAaGwKt6hsBRenuBc6CP65VK9lq88hj6Wnnt73OgkYJWFQTMMYokb30pgy76aOMtP9HnE4fc1QHqhhpAH29JYlTHCmorG7BOS8vVKwHevoRfJn+vb04iBnuxNuNrAAAAAElFTkSuQmCC';


        }
        else {
            $lua.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRIie3Wz4tNYRzH8ddc7mTS1V1QpIkpNlaUndCUSCmNlSwkm/kHJBt/gSQ2EivZzUaNLaUmC2RMWfhZYsivCJlQ5lg8X53jdq57h3tW7qdOT+f7fZ7v+3Se83w/h776yrUM45jELB5gqEpgHcfwGVnhmq0SvBK3C7DXMX7B5qqgq/E4QE8wiom4P14VtI6pgEyhiRX4hjk0qgIfDeijgMKuiF2pCtrA24BsL8THI3aqF5BaSWwMy3EV1wvxpTF+rQq8J8ZLLfHnMa7pBbhM96VXur4lvi7ir7CoCvCnAJQ1h+nIjVUB/hDFmyW5Q5F7KN/znuluFN9YkqvhZuQnMdhL8MUofKRNfhgv5c1lbYd6dV0+4N4oOo2BNnM2SM0lk7rZeezGqoAMYwfO4SNmugEvkZwnw4E/zGviLL773bXKrhvdgOGg3I1GOswdkWzzGp5J9vlCOnYZ5rGtW3BN6smZdK47wVu1Be9j/YkFrtXAnVj8DvuVd7qihiTLnIt1E1i8UDDpd+eyfK9mJOfaJNlkXfLtUZyUfxvzOP230F8awGE81fkjyqQ+sPNfgK0axD5cwD28wQ9pG27hDLZqfwT7+s/0E7gWgGqgbxZCAAAAAElFTkSuQmCC'
            $lua.classList = 'mode'
        };

    }

    return (
        <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRIie3Wz4tNYRzH8ddc7mTS1V1QpIkpNlaUndCUSCmNlSwkm/kHJBt/gSQ2EivZzUaNLaUmC2RMWfhZYsivCJlQ5lg8X53jdq57h3tW7qdOT+f7fZ7v+3Se83w/h776yrUM45jELB5gqEpgHcfwGVnhmq0SvBK3C7DXMX7B5qqgq/E4QE8wiom4P14VtI6pgEyhiRX4hjk0qgIfDeijgMKuiF2pCtrA24BsL8THI3aqF5BaSWwMy3EV1wvxpTF+rQq8J8ZLLfHnMa7pBbhM96VXur4lvi7ir7CoCvCnAJQ1h+nIjVUB/hDFmyW5Q5F7KN/znuluFN9YkqvhZuQnMdhL8MUofKRNfhgv5c1lbYd6dV0+4N4oOo2BNnM2SM0lk7rZeezGqoAMYwfO4SNmugEvkZwnw4E/zGviLL773bXKrhvdgOGg3I1GOswdkWzzGp5J9vlCOnYZ5rGtW3BN6smZdK47wVu1Be9j/YkFrtXAnVj8DvuVd7qihiTLnIt1E1i8UDDpd+eyfK9mJOfaJNlkXfLtUZyUfxvzOP230F8awGE81fkjyqQ+sPNfgK0axD5cwD28wQ9pG27hDLZqfwT7+s/0E7gWgGqgbxZCAAAAAElFTkSuQmCC" className='mode' onClick={mudartema} />
        </div>
    )
}
export default Mode