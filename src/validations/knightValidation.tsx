const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function knightValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {
  
  let xMovement = Math.abs(previusVerticalTile - newVerticalTile);
  let yMovement = Math.abs(Number(verticalAxis.indexOf(previusHorizontalTile)) - Number(verticalAxis.indexOf(newHorizontalTile)));

  
  return (xMovement === 2 && yMovement === 1) || (xMovement === 1 && yMovement === 2)
}
