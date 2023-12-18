import React from 'react'
import Card from "./Card";
import Cuadros from "./Cuadros";

const Productos = () => {
  return (
    <div>
      NUEVO
         {/* Content */}
         <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="http://yuanmayorista.com/upload/goods/20230214/20230214015540_1.jpg"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Cuadros
              img="tlou.jpg"
              description="The Last of Us"
              price="2600"
              inventory="1"
            />
            {/* Card */}
            <Card
              img="http://yuanmayorista.com/upload/goods/20230616/20230616222110_0.jpg"
              description="SLAM DUNK 30CM "
              price="Ars 14100"
              inventory="2"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price=""
              inventory="2"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
    </div>
    </div>
  )
}

export default Productos