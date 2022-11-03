//import { ReactNode } from "react";
import "./Tile.css";

type TileProps = {
  tile: string;
  image: string;
  piece: string;
  verticalTile: string;
  horizontalTile: number;
};

export default function Tile({ tile, image, piece, verticalTile, horizontalTile}: TileProps) {


  return (
    <div className="tile" id={tile} typeof={piece}>

      {image && 
      <div
      id={piece}
      className="piece"
      style={{backgroundImage: `${image}`}}
      ></div>
      }
      
    </div>
  )
}