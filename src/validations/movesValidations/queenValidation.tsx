import bishopValidation from "./bishopValidation";
import rookValidation from "./rookValidation";

export default function queenValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {
    
  return (
    bishopValidation(
      previusHorizontalTile,
      previusVerticalTile,
      newHorizontalTile,
      newVerticalTile
    ) ||
    rookValidation(
      previusHorizontalTile,
      previusVerticalTile,
      newHorizontalTile,
      newVerticalTile
    )
  );  
}