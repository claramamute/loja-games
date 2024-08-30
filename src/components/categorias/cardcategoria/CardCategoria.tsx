import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps{
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <>
        <div className="overflow-hidden justify-between  rounded-2xl text-white flex flex-col w-96">
            <h2 className="bg-purple  font-bold text-2xl py-2 px-6 font-poppins">Categoria</h2>
            <p className="bg-blue-neon text-3xl  p-8 h-full font-poppins ">{categoria.tipo}</p>
           
            <div className="flex ">
                <Link to={`/editarcategoria/${categoria.id}`} className="bg-purple w-full text-white flex  justify-center  font-bold font-poppins py-2 items-center">
                     <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className="bg-red-clean  w-full text-white flex justify-center font-bold font-poppins py-2 items-center">
                     <button >Deletar</button>
                </Link>
            </div>
            
        </div>
    </>
  )
}

export default CardCategoria