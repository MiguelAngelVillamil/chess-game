//import { ReactNode } from "react";
import "./Tile.css";

type TileProps = {
  tile: string;
  image: string;
  piece: string;
  color: string;
};

export default function Tile({ tile, image, piece, color }: TileProps) {

  return (
    <div className="tile" id={tile} typeof={piece}>

      {image && 
      <div
      id={piece + " " + color}
      className="piece"
      style={{backgroundImage: `${image}`}}
      ></div>
      }
      
    </div>
  )
}