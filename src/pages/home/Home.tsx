import './Home.css';

function Home() {
  return (
    <>
     <div className="
    fundoHome
    flex
    justify-center ">
      <div className="
      container
      grid
      grid-cols-2
      text-white
      items-center justify-center">
        <div className="
        flex
        flex-col
        gap-6
        items-center
        justify-center
        py-4
      
        ">
          <div className='flex items-center gap-10'>
            <h2
            className="text-8xl
            font-bold
            text-blue-neon
            font-poppins
            ">
              Hi
            </h2>

            <div className='flex flex-col items-center justify-center'>
              <p className="text-4xl uppercase font-poppins text-blue-neon font-bold">
                Seja bem-vindo
              </p>
              <p className='text-2xl'>
                que a força esteja com você
              </p>
            </div>
          </div>

            <div className="flex justify-around gap-4">

              <div className="rounded border-blue-neon border-solid border-2 py-2 px-4 hover:bg-blue-neon hover:text-black font-poppins font-bold">
                Novo Produto
              </div>

            </div>
        </div>
        <div  >
            <img src="https://ik.imagekit.io/image2233/gamestation/darthvader?updatedAt=1724980820802" alt="Imagem página home" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home