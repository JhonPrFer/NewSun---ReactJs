import "./style.css"
import Search from "../../../public/Icons/Search"
import Logo from "../../../public/Icons/Logo"
export default function Header() {
  return (
    <header className='bg-red-strong py-6 px-52 flex justify-between items-center text-white font-bold'>
      <h1 className='text-4xl'><a className='flex items-center justify-center gap-3' href="/"><Logo/>New Sun</a></h1>
      <nav className='flex gap-6'>
        <a className='text-base transition-all nav-link' href="/" title='Home'>Home</a>
        <a className='text-base transition-all nav-link' href="#" title='Prefeituras'>Prefeituras</a>
        <a className='text-base transition-all nav-link' href="#" title='Regiões'>Regiões</a>
      </nav>
      <label htmlFor='search' className='bg-white bg-opacity-30 text-white rounded-full flex'>
        <input name='search' id='search' className='bg-white bg-opacity-0 py-2 px-3 rounded-full placeholder:text-white placeholder:opacity-50 placeholder:text-base outline-none' placeholder='Pesquisar' />
        <button className='bg-red-strong bg-opacity-70 p-2 rounded-full'><Search/></button>
      </label>
    </header>
  )
}
