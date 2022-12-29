import isChecked from "../isCheckd";
import queenValidation from "../movesValidations/queenValidation";

const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function kingValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number,
  color: string | undefined
) {

  if(Math.abs(previusVerticalTile - newVerticalTile) <= 1 && Math.abs(verticalAxis.indexOf(previusHorizontalTile) - verticalAxis.indexOf(newHorizontalTile)) <= 1) {
    
    if (queenValidation(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile)) {

      return !isChecked(color).includes(`${newHorizontalTile + newVerticalTile}`);

    }
    
  }
}
