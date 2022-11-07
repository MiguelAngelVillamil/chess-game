const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function bishopValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number
) {
  

  
  let moves = Math.abs(previusVerticalTile - newVerticalTile) - 2;

  let numeric = Number(previusVerticalTile);
  let letter = verticalAxis.indexOf(previusHorizontalTile);

  console.log(numeric)
  console.log(letter);

  for (let index = 0 ; index <= moves; index++) {
        
    
    
    if (previusVerticalTile < newVerticalTile) {
      numeric++ 
    } else {
      numeric--
    }

    if (verticalAxis.indexOf(previusHorizontalTile) < verticalAxis.indexOf(newHorizontalTile)) {
      letter++;
    } else {
      letter--;
    }

    console.log(numeric);
    console.log(letter);


    if (!document.getElementById((verticalAxis[letter] + numeric).toString())?.children.length) continue;
    else return false;

  }

  return Math.abs(newVerticalTile - previusVerticalTile) === Math.abs(verticalAxis.indexOf(newHorizontalTile) - verticalAxis.indexOf(previusHorizontalTile))
    
  
}
