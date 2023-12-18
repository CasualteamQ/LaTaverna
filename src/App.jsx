import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiShoppingCart2Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Profile from "./components/shared/Profile";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import Cuadros from "./components/shared/Cuadros";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import Productos from "./components/shared/Productos";
import Hero from "./components/shared/Hero";
import productos from "./pages/productos";
import Carousel from './components/shared/Carousel'



function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };
<Routes>

  <Route path="/" element={<Layout/>} />
  <Route path="/productos" element={<productos/>} />
  <Route path="/cuadros" element={<Cuadros/>}  />
</Routes>
  return (
    <div className="bg-[#f7fff7] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Profile showMenu={showMenu} />
      

      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button onClick={toggleMenu} className=" text-white p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine  className="text-white" />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiShoppingCart2Line className="text-white" />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-[#070707] font-thin">Bienvenido "nombre de Usuario"</h2>
            <button className="flex items-center gap-4 text-black bg-[#e7bd0c] py-2 px-4 rounded-lg">
              <RiArrowDownSLine  className="text-black" /> Filtro
            </button>
          </div>
          {/* Content */}
          <div>
          <Carousel/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
