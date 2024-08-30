import { Heart, MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="flex flex-col bg-black">
        <div className="flex justify-center items-center p-2  bg-blue-neon">
          <p className="font-poppins text-white font-extrabold uppercase ">Frete grátis para todo Brasil!</p>
        </div>

        <div className="flex justify-between items-center p-8 bg-black">
     
          <div className="w-1/3 flex justify-center">
            <a href="/">
              <img src="https://ik.imagekit.io/image2233/gamestation/GameStation-removebg-preview.png?updatedAt=1724959272362" alt="Logo-games" className="w-2/3" />
            </a>
          </div>

        
          <div className="w-1/3 flex justify-center items-center gap-2">
            <input type="text" name="buscar" id="buscar" placeholder="Busque seus games favoritos"  className="w-full p-2 border border-blue-neon rounded bg-black" />
            <label htmlFor="buscar"><MagnifyingGlass size={32} color="#00d7df" /></label>
          </div>

         
          <div className="w-1/3 flex justify-end">
            <ul className="flex justify-center items-center gap-6">
              <li><a href=""><User size={32} color="#00d7df" /></a></li>
              <li><a href=""><Heart size={32} color="#00d7df" /></a></li>
              <li><a href=""><ShoppingCart size={32} color="#00d7df" /></a></li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex justify-around p-4 bg-black font-poppins font-semibold text-white uppercase">
        
            <li  className=" hover:text-blue-neon"><a href="">Produtos</a></li>
            <li  className=" hover:text-blue-neon"><Link to='/categorias'>Categorias </Link></li>
            <li  className=" hover:text-blue-neon"><Link to='/cadastrarcategoria'>Cadastrar Categoria </Link></li>
            <li  className=" hover:text-blue-neon"><Link to='' >Sair</Link></li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
