import "./style.css"

export default function Hero() {
  return (
    <section className="hero px-52 flex items-center w-full">
      <div className="bg-red-strong p-5 w-max h-max text-white rounded-lg flex flex-col gap-10">
        <h2 className="text-5xl font-bold">
          Conheça a New Sun, um lugar onde você conhecerá as maravilhas do Japão sem sair de casa
        </h2>
        <a
          href="#"
          className="self-end py-3 px-7 border-4 border-red-base rounded-md font-bold text-2xl transition-all 
          hover:bg-red-base
          ">
          Comece a explorar
        </a>
      </div>
    </section>
  ) 
}
