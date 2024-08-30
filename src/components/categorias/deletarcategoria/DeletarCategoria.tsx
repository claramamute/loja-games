import {  useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
            alert('Ocorreu algum erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) { //user desconectado
            buscarPorId(id)
        }
    }, [id])



    function retornar() {
        navigate('/categorias')
    }


    async function deletarCategoria() {
      
        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar o categoria')
        }
       
        retornar()
    }


    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center py-8 text-white'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-purple  text-white font-bold text-2xl font-poppins'>Tema</header>
                <p className='p-8 text-3xl bg-white h-full font-poppins'>{categoria.tipo}</p>
                <div className="flex text-white font-bold font-poppins">
                    <button onClick={retornar}
                        className='text-slate-100 bg-red-clean hover:bg-red-600 w-full py-2' >Não</button>
                    <button onClick={deletarCategoria} className='w-full text-slate-100 bg-purple hover:bg-indigo-600 flex items-center justify-center' >
                            Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria