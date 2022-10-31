//import { ReactNode } from "react";
import "./Tile.css";

type TileProps = {
  image: string;
  children: string;
};

export default function Tile({ children, image }: TileProps) {


  return (
    <div className="tile" id={children}>

      {image && <div className="piece" style={{backgroundImage: `${image}`}}></div>}
      
    </div>
  )
}