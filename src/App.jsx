import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import Contato from "./pages/contato";
import Navbar from "./components/navbar";
import Loja from "./pages/loja";
import Sobre from "./pages/sobre";
function App() {



  return (
    <div className="App">
      <header>

        <div className="header-flex">
          <Navbar />
          <div className="hamburguer">
            <ul className='botaohamburguer'></ul>
          </div>
          <section className="header">
            <img src='/src/img/farm-logo.png' alt="farm-logo" className="farmlogo" />
          </section>
        </div>
      </header>

      <main>

        <div className="estruturafix">
          <section className='estrutura'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path='/loja' element={<Loja />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path="*" element={<Navigate to="/home" />} />
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
