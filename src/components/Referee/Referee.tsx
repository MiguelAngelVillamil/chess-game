import bishopValidation from "../../validations/bishopValidation";
import pawnValidation from "../../validations/pawnValidation";

export default class Referee {
 
  
  isValidMove(
    previusHorizontalTile: string,
    previusVerticalTile: number,
    newHorizontalTile: string,
    newVerticalTile: number, 
    piece: string,
    color: string | undefined
    ) {
     
    switch (piece) {
      case "PAWN":
      return pawnValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile, color);

      case "BISHOP":
      return bishopValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile)
    }
  }
}