
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarCategoria from './components/categorias/listarcategoria/ListarCategoria'
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className= 'min-h-[80vh] fundoApp'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
            <Route path="/editarcategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
