import React from "react";
import ProductDetail from "../ProductDetail";
import { Link } from "react-router-dom";
import Product from "../../pages/Product";


const Card = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
    
<Link to='product'> 
      <img 
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-md"
      />
      
      <p className="text-xl font-avenger text-[#ff2800]">{description}</p>
      <span className="text-gray-400">$ {price} </span>
      <p className="text-gray-600">{inventory} Disponibles</p>
</Link>
    </div>
  );
};

export default Card;
