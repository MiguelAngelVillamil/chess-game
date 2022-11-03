import { MouseEvent, useRef, useState } from "react";
import "./ChessBoard.css"

import Tile from "../Tile/Tile";
import Referee from "../Referee/Referee";

import {initialPosition} from "../../data/InitialPocition";

export default function ChessBoard() {


  const chessBoardRef = useRef<HTMLDivElement>(null);

  const [pieces, setPieces] = useState(initialPosition);

  let activePiece: HTMLElement | null = null;

  const grabPiece = (event: MouseEvent) => {
    const element = event.target as HTMLElement;

    if (element.classList.contains("piece")) {

      const x = event.clientX - 20;    
      const y = event.clientY - 20;

      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  const movePiece = (event: MouseEvent) => {

    const reference = chessBoardRef.current

    if (activePiece && reference) {

      const minX = reference.offsetLeft;
      const minY = reference.offsetTop;

      const maxX = reference.offsetLeft + reference.clientWidth - 40;
      const maxY = reference.offsetTop + reference.clientHeight - 40;;

      const x = event.clientX - 20;    
      const y = event.clientY - 20;

      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`
      } else {
        activePiece.style.left = `${x}px`
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`
      } else {
        activePiece.style.top = `${y}px`
      }
      
    }
  }

  const dropPiece = (event: MouseEvent) => {

    //Casilla donde estaba la pieza
    const target = event.target as HTMLDivElement
    const previusTile = target.parentElement?.id;

    //Casillas individuales
    const previusHorizontalTile = Object.assign([], previusTile)[0];
    const previusVerticalTile = Object.assign([], previusTile)[1];
   

    //casilla donde queda
    const x = event.clientX, y = event.clientY;
    const elementMouseIsOver = document.elementsFromPoint(x, y);
    const newTile = elementMouseIsOver[elementMouseIsOver.length - 6].id
   
    
    //Casillas individuales
    const newHorizontalTile = Object.assign([], newTile)[0];
    const newVerticalTile = Object.assign([], newTile)[1];

    //pieza
    const piece = target.id;


    if(activePiece?.style.position) {
      activePiece.style.position = ""
    }
    
    if (activePiece) {
      activePiece = null;
    }

    if (newTile !== previusTile) {
      setPieces({
        ...pieces,
        [newTile as keyof typeof pieces]: pieces[previusTile as keyof typeof pieces],
        [previusTile as keyof typeof pieces]: ""
      })
    }    
    
    const referee = new Referee();
    referee.isValidMove(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile, piece)
  }

  const horizontalAxis = [8, 7, 6, 5, 4, 3, 2, 1]
  const verticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

  const algebraicNotation: string[] = [];
  
  horizontalAxis.forEach((number)=> {
    verticalAxis.forEach((letter) => {
      algebraicNotation.push(letter + number);
    });
  });

  return (
    <div
      className="chessBoard"
      ref={chessBoardRef}

      onMouseUp={event => dropPiece(event)}
      onMouseDown={event => grabPiece(event)}
      onMouseMove={event => movePiece(event)}
    >

      {algebraicNotation.map((element) => 

        <Tile
          key={element}
          tile={element}
          verticalTile={pieces[element as keyof typeof pieces]?.verticalTile}
          horizontalTile={pieces[element as keyof typeof pieces]?.horizontalTile}
          image={pieces[element as keyof typeof pieces]?.image}
          piece={pieces[element as keyof typeof pieces]?.piece}
        />  
      )}
      
    </div>
  );
}