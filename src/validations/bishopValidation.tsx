const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function bishopValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {
    
  // Must search for the pieces in the road of our Bishop.
  let moves = Math.abs(previusVerticalTile - newVerticalTile) - 2;
  let y = Number(previusVerticalTile);
  let x = verticalAxis.indexOf(previusHorizontalTile);


  for (let index = 0 ; index <= moves; index++) {
      
    // Saving if we move to + or to -.
    previusVerticalTile < newVerticalTile ? y++ : y--;

    // Saving if we move to left or to right.
    verticalAxis.indexOf(previusHorizontalTile) < verticalAxis.indexOf(newHorizontalTile) ? x++ : x--;

    // When we don't find pieces.
    if (!document.getElementById((verticalAxis[x] + y).toString())?.children.length) continue;
    else return false;

  }

  return Math.abs(newVerticalTile - previusVerticalTile) === Math.abs(verticalAxis.indexOf(newHorizontalTile) - verticalAxis.indexOf(previusHorizontalTile))
    
}
