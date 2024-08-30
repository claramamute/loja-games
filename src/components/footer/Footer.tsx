import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {

  let date  = new Date().getFullYear()
  return (
    <>
      <div className="flex justify-center bg-blue-neon text-white font-poppins font-bo">
        <div className="container flex flex-col items-center py-2">
          <p className=' font-bold'>Game Station | Copyright: {date} </p>
          <p >Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <LinkedinLogo size={30} weight="bold" />
            <InstagramLogo size={30} weight="bold" />
            <FacebookLogo size={30} weight="bold" />
          </div>
        </div>
      </div>
  </>
  )
}

export default Footer