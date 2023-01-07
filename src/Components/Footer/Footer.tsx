import "./style.css"
import Logo from "../../../public/Icons/Logo"
import Github from "../../../public/Icons/Github"
import Instagram from "../../../public/Icons/Instagram"
import Spotify from "../../../public/Icons/Spotify"
import Twitter from "../../../public/Icons/Twitter"
export default function Footer( ) {
  return (
    <footer>
      <section className='upper-footer bg-red-strong text-white flex items-center justify-center gap-40 py-20'>
        <div className='flex items-center justify-center gap-5' >
          <Logo/>
          <p className='font-bold text-4xl'>NewSun</p>
        </div>
        <div className='flex flex-col gap-10'>
          <h3 className='text-2xl font-bold'>Siga a New Sun também nas redes</h3>
          <div className='flex items-center justify-evenly'>
            <a href="#" title='Twitter'><Twitter/></a>
            <a href="#" title='Spotify'><Spotify/></a>
            <a href="#"  title='Instagram'><Instagram/></a>
          </div>
        </div>
      </section>
      <section className='lower-footer bg-red-base flex flex-col justify-center items-center text-white p-5 text-xl'>
        <p>Copyright  © 2022 Todos os direitos reservados a New Sun</p>
        <p className='flex gap-2'>Criado e Desenvolvido por <a className='flex gap-2' href="https://github.com/JhonPrFer" target='_blank' rel="noreferrer"><b className='text-white'>@JhonPrFer</b><Github/></a></p>
      </section> 
    </footer>
  )
}
