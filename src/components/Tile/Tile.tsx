import { ReactNode } from "react";
import "./Tile.css";

type TileProps = {
  image: any;
  children: ReactNode;
};

export default function Tile({ children, image }: TileProps) {


  return (
    <div className="tile">

      {image && <div className="piece" style={{backgroundImage: `url(/images/${image}.png)`}}></div>}
      
    </div>
  )
}