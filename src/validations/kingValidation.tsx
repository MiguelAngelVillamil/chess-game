import queenValidation from "./queenValidation";

const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function kingValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {

  if(Math.abs(previusVerticalTile - newVerticalTile) <= 1 && Math.abs(verticalAxis.indexOf(previusHorizontalTile) - verticalAxis.indexOf(newHorizontalTile)) <= 1) {
    
    return queenValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile);
    
  }
}
