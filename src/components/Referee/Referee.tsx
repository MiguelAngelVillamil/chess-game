import bishopValidation from "../../validations/movesValidations/bishopValidation";
import knightValidation from "../../validations/movesValidations/knightValidation"
import kingValidation from "../../validations/movesValidations/kingValidation";
import pawnValidation from "../../validations/movesValidations/pawnValidation";
import queenValidation from "../../validations/movesValidations/queenValidation";
import rookValidation from "../../validations/movesValidations/rookValidation";

export default function isValidMove(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number, 
  piece: string,
  color: string | undefined
  ) {

  if (previusHorizontalTile === newHorizontalTile && previusVerticalTile === newVerticalTile) return false;
  
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
