

const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function rookValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {
    
  // The id number it's the same.
  if(newVerticalTile === previusVerticalTile) {

    let moves = Math.abs(verticalAxis.indexOf(previusHorizontalTile) - verticalAxis.indexOf(newHorizontalTile)) - 2;
    let y = Number(previusVerticalTile);
    let x = verticalAxis.indexOf(previusHorizontalTile);

    for (let index = 0; index <= moves; index++) {
      
      // Saving how much we move to + or to -.
      verticalAxis.indexOf(previusHorizontalTile) < verticalAxis.indexOf(newHorizontalTile) ? x++ : x--;
      
      // When we don't find pieces.
      if (!document.getElementById((verticalAxis[x] + y).toString())?.children.length) continue;
      else return false;

    }

  // Is in the same id letter.
  } else if (newHorizontalTile === previusHorizontalTile) {

    let moves = Math.abs(previusVerticalTile - newVerticalTile) - 2;
    let y = Number(previusVerticalTile);
    let x = verticalAxis.indexOf(previusHorizontalTile);
    
    for (let index = 0 ; index <= moves; index++) {
        
      // Saving if how much we move to left or to right.
      previusVerticalTile < newVerticalTile ? y++ : y--;
      
      // When we don't find pieces.
      if (!document.getElementById((verticalAxis[x] + y).toString())?.children.length) continue;
      else return false;

      
    }
  }
  
  return (previusVerticalTile === newVerticalTile && previusHorizontalTile !== newHorizontalTile) || (previusVerticalTile !== newVerticalTile && previusHorizontalTile === newHorizontalTile);
    
}