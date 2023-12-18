import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  const diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
  const f = new Date();
/*   document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
 */  
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="sombra text-5xl text-[#FF2800] shadow-rose-800 font-avenger">La Caverna Comics</h1>
          <p className="text-[#252525]  font-mangal">{diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}</p>
        </div>
        <div>
          <button className="p-2 rounded-lg hover:bg-[#ecf4f3ff] transition-[0.8] bg-slate-300 hover:transition-colors">Login</button>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
            <input
              type="text"
              className="bg-[#e2e2e2] w-full py-2 pl-10 pr-4 rounded-lg text-black caret-red-600 "
              placeholder="Buscar..."
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-[#ecf4f3ff] shadow-lg flex items-center justify-between md:justify-start md:gap-8 border-b mb-6 transition-shadow">
        <Link to="/" className="relative  py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] ">
          <span className="text-[#fd0034ff]">Novedades!</span>
    {/*     <a
          href="#"
          className="relative  py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] ">
          <span className="text-[#fd0034ff]">Novedades!</span>
        </a> */}
            </Link>
       <Link to="productos"  className="py-2 pr-4 relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] hover:text-[#fd0034ff] transition-colors text-zinc-400   "> Productos
       {/*  <a href="#" className="py-2 pr-4 relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] hover:text-[#fd0034ff] transition-colors   ">
          Productos
        </a> */}
            </Link>
        <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] hover:text-[#fd0034ff] transition-colors">
          Indumentaria
        </a>
        <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#fd0034ff] before:left-0 before:rounded-full before:-bottom-[1px] hover:text-[#fd0034ff] transition-colors">
          Cuadros
        </a>
        
      </nav>
    </header>
  );
};

export default Header;
