import isValidMove from "../components/Referee/Referee";

export default function isChecked(ourColor: string | undefined) {

  let tilesArray = Object.assign([], document.getElementsByClassName("tile"));

  let piecesTilesArray: string[] = [];

  tilesArray.forEach((element: HTMLDivElement) => {

    // Only work with the tiles that have a piece inside.
    if (element.children.length) {

      let tile = element.id; // For example: "e7"
      let previusHorizontalTile = tile.charAt(0); // For example: "e"
      let previusVerticalTile = Number(tile.charAt(1)); // For example: 7

      let pieceAndColor = element.children[0].id; // For example: "PAWN black"
      let attackingPiece = pieceAndColor.split(" ")[0]; // For example: "PAWN"
      let color = pieceAndColor.split(" ")[1]; // For example: "black"

      
      if (ourColor === color) {

        tilesArray.forEach((element: HTMLDivElement) => {
          // Work with all tiles.
          let newTile = element.id; // For example: "e7"
          let newHorizontalTile = newTile.charAt(0); // For example: "e"
          let newVerticalTile = Number(newTile.charAt(1)); // For example: 7
          
          if (attackingPiece === "PAWN") {
            
            const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
      
            let xMovement = previusVerticalTile - newVerticalTile;
            let yMovement = Math.abs(Number(verticalAxis.indexOf(previusHorizontalTile)) - Number(verticalAxis.indexOf(newHorizontalTile)));
      
            // Here we check only the tiles pawn can take (taking the color into account).
            if (color === "black" && yMovement === 1 && xMovement === 1) {
              piecesTilesArray.push(`${(verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) + 1] ) + (previusVerticalTile - 1)}`)
              piecesTilesArray.push(`${(verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) - 1] ) + (previusVerticalTile - 1)}`)
            }
            if (color === "white" && yMovement === 1 && xMovement === -1) {
              piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) + 1] + (previusVerticalTile + 1)}`);
              piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) - 1] + (previusVerticalTile + 1)}`);
            }

          } else if (attackingPiece === "KING") {

            const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
            
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) + 1] + (previusVerticalTile + 1)}`);
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) + 1] + (previusVerticalTile - 1)}`);
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) + 1] + (previusVerticalTile)}`);

            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) - 1] + (previusVerticalTile + 1)}`);
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) - 1] + (previusVerticalTile - 1)}`);
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile)) - 1] + (previusVerticalTile)}`);

            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile))] + (previusVerticalTile + 1)}`);
            piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile))] + (previusVerticalTile - 1)}`);
            //piecesTilesArray.push(`${verticalAxis[Number(verticalAxis.indexOf(previusHorizontalTile))] + (previusVerticalTile)}`);
      

          } else {

            if (isValidMove(previusHorizontalTile, previusVerticalTile, newHorizontalTile, newVerticalTile, attackingPiece, color)) {
              piecesTilesArray.push(newTile);
            }
          }
        });
      }
    } 
  });
  let aa = new Set(piecesTilesArray)
  let bb = Array.from(aa);
  bb = bb.filter(tile => tile !== "NaN")
  return bb;
}