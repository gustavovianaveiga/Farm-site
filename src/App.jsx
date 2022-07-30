import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import Contato from "./pages/contato";
import Navbar from "./components/navbar";
import Loja from "./pages/loja";
import Hamburguer from "./components/hamburguer"
import Login from "./pages/login";
import Singup from "./pages/singup";
import Mode from "./components/mode";
function App() {



  return (
    <div className="App">
      <header>
        <div className="header-flex">
          <Navbar />
          <section className="header">
            <Hamburguer />
            <Mode />
            <img src='/src/img/farm-logo.png' alt="farm-logo" className="farmlogo" />
          </section>
        </div>
      </header>

      <main>
        <div className="estruturafix">
          <section className='estrutura'>
            <Routes>
              <Route path="/pagina-inicial" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path='/loja' element={<Loja />} />
              <Route path='/login' element={<Login />} />
              <Route path='/criar-conta' element={<Singup />} />
              <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
          </section>
        </div>
        <footer>
          <div className='footer'></div>
        </footer>
      </main>
    </div>
  )
}

export default App
