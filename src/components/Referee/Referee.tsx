import bishopValidation from "../../validations/bishopValidation";
import { knightValidation } from "../../validations/knightValidation";
import kingValidation from "../../validations/kingValidation";
import pawnValidation from "../../validations/pawnValidation";
import queenValidation from "../../validations/queenValidation";
import rookValidation from "../../validations/rookValidation";

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
      return bishopValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile);

      case "ROOK":
      return rookValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile);

      case "QUEEN":
      return queenValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile);

      case "KING":
      return kingValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile, color);

      case "KNIGHT":
      return knightValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile);
    }
  }
}