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
    <div className="tile" id={tile} >

      {image && <div className="piece" style={{backgroundImage: `${image}`}}></div>}
      
    </div>
  )
}