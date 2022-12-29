import { MouseEvent, useRef, useState, useEffect } from "react";
import "./ChessBoard.css"

import Tile from "../Tile/Tile";

import { initialPosition } from "../../data/InitialPocition";
import isValidMove from "../Referee/Referee";
import turnCatcher from "../TurnCatcher/turnCatcher";
import kingIsInTrouble from "../../validations/kingIsInTrouble";
import isChecked from "../../validations/isCheckd";

export default function ChessBoard() {

  const chessBoardRef = useRef<HTMLDivElement>(null);

  const [pieces, setPieces] = useState(initialPosition);
  const [moves, setMoves] = useState(0);
  const [checkedTiles, setCheckedTiles] = useState<string[]>([]);

  let activePiece: HTMLElement | null = null;

  /////////////////////////////////////////////////////////////////

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
    
    const target = event.target as HTMLDivElement
    
    //pieza
    const piece = target.id.split(" ")[0];

    //color
    const color = target.id.split(" ")[1]

    //Casilla donde estaba la pieza
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


    if(activePiece?.style.position) {
      activePiece.style.position = ""
    }
    
    if (activePiece) {
      activePiece = null;
    }

    //Debo buscar la manera de hacer que cada pieza que se mueva valide si el rey entra en jaque
    

    const validate = 
    isValidMove(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile, piece, color)
    && kingIsInTrouble(checkedTiles, color)
    && turnCatcher(color, moves)
    

    if (validate) {
      setMoves(moves + 1);
      console.log("actualizado")
      setCheckedTiles(isChecked(color));
      setPieces({
        ...pieces,
        [newTile as keyof typeof pieces]: pieces[previusTile as keyof typeof pieces],
        [previusTile as keyof typeof pieces]: ""
      })
    }    
    
  }
  
  /////////////////////////////////////////////////////////////////

  const algebraicNotation: string[] = [];

  const horizontalAxis = [8, 7, 6, 5, 4, 3, 2, 1]
  const verticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
  
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
          color={pieces[element as keyof typeof pieces]?.color}
          image={pieces[element as keyof typeof pieces]?.image}
          piece={pieces[element as keyof typeof pieces]?.piece}
        />  
      )}
      
    </div>
  );
}