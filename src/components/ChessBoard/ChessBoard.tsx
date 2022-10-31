import { MouseEvent, useRef } from "react";
import "./ChessBoard.css"

import Tile from "../Tile/Tile";



export default function ChessBoard() {

  const chessBoardRef = useRef<HTMLDivElement>(null);

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
    if (activePiece) {
      activePiece = null;
    }
  }

  const piece = (coordinate: string) => {
    switch (coordinate) {
      case "a1":
      return "rook_w"

      case "h1":
      return "rook_w"

      case "b1":
      return "knight_w"
      
      case "g1":
      return "knight_w"
      
      case "c1":
      return "bishop_w"
      
      case "f1":
      return "bishop_w"
      
      case "d1":
      return "queen_w"
      
      case "e1":
      return "king_w"
      
      case "a8":
      return "rook_b"

      case "h8":
      return "rook_b"

      case "b8":
      return "knight_b"
      
      case "g8":
      return "knight_b"
      
      case "c8":
      return "bishop_b"
      
      case "f8":
      return "bishop_b"
      
      case "d8":
      return "queen_b"
      
      case "e8":
      return "king_b"

      case "a2":
      return "pawn_w"

      case "b2":
      return "pawn_w"

      case "c2":
      return "pawn_w"

      case "d2":
      return "pawn_w"

      case "e2":
      return "pawn_w"

      case "f2":
      return "pawn_w"

      case "g2":
      return "pawn_w"

      case "h2":
      return "pawn_w"

      ////////////////

      case "a7":
      return "pawn_b"

      case "b7":
      return "pawn_b"

      case "c7":
      return "pawn_b"

      case "d7":
      return "pawn_b"

      case "e7":
      return "pawn_b"

      case "f7":
      return "pawn_b"

      case "g7":
      return "pawn_b"

      case "h7":
      return "pawn_b"
      
    }
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

        <Tile key={key} image={piece(element)}>
          {element}
        </Tile>
  
      )}
      
    </div>
  );
}