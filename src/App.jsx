import { Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import Contato from "./pages/contato";
import Navbar from "./components/navbar";
function App() {



  return (
    <div className="App">

      <header>
        <section className="header">
          <img src='/src/img/farm-logo.png' alt="farm-logo" className="farmlogo" />

        </section>
      </header>

      <main>
        <Navbar />
        <div className="estruturafix">
          <section className='estrutura'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>

          </section>
        </div>
        <footer></footer>
      </main>



    </div>
  )
}

export default App
