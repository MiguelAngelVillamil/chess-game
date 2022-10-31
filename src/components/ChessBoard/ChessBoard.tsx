import { MouseEvent, useRef, useState } from "react";
import "./ChessBoard.css"

import Tile from "../Tile/Tile";

const initialPosition =
  {  
    a1: "url(/images/rook_w.png)",
    h1: "url(/images/rook_w.png)",
    b1: "url(/images/knight_w.png)",
    g1: "url(/images/knight_w.png)",
    c1: "url(/images/bishop_w.png)",
    f1: "url(/images/bishop_w.png)",
    d1: "url(/images/queen_w.png)",
    e1: "url(/images/king_w.png)",
    a8: "url(/images/rook_b.png)",
    h8: "url(/images/rook_b.png)",
    b8: "url(/images/knight_b.png)",
    g8: "url(/images/knight_b.png)",
    c8: "url(/images/bishop_b.png)",
    f8: "url(/images/bishop_b.png)",
    d8: "url(/images/queen_b.png)",
    e8: "url(/images/king_b.png)",
    a2: "url(/images/pawn_w.png)",
    b2: "url(/images/pawn_w.png)",
    c2: "url(/images/pawn_w.png)",
    d2: "url(/images/pawn_w.png)",
    e2: "url(/images/pawn_w.png)",
    f2: "url(/images/pawn_w.png)",
    g2: "url(/images/pawn_w.png)",
    h2: "url(/images/pawn_w.png)",
    a7: "url(/images/pawn_b.png)",
    b7: "url(/images/pawn_b.png)",
    c7: "url(/images/pawn_b.png)",
    d7: "url(/images/pawn_b.png)",
    e7: "url(/images/pawn_b.png)",
    f7: "url(/images/pawn_b.png)",
    g7: "url(/images/pawn_b.png)",
    h7: "url(/images/pawn_b.png)"
  } 

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
    //console.log(previusTile);

    //casilla donde queda
    const x = event.clientX, y = event.clientY;
    const elementMouseIsOver = document.elementsFromPoint(x, y);
    const newTile = elementMouseIsOver[elementMouseIsOver.length - 6].id
    //console.log(newTile)

    
    if (activePiece) {
      activePiece = null;
    }

    
    setPieces(
      {
        ...pieces,
        [newTile as keyof typeof pieces]: pieces[previusTile as keyof typeof pieces],
        [previusTile as keyof typeof pieces]: ""
      }
    )
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

      {algebraicNotation.map((element, key) => 

        <Tile key={key} image={pieces[element as keyof typeof pieces]}>
          {element}
        </Tile>
  
      )}
      
    </div>
  );
}