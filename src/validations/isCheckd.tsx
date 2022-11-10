import Referee from "../components/Referee/Referee";



export default function isChecked(newHorizontalTile: string, newVerticalTile: number, ourColor: string | undefined) {

  let newHorizontalKingTile = newHorizontalTile;
  let newVerticalKingTile = newVerticalTile;

  let flag: boolean[] = [];

  let tilesArray = Object.assign([], document.getElementsByClassName("tile"));

  tilesArray.forEach((element: HTMLDivElement) => {

    // Only work with the tiles that have a piece inside.
    if (element.children.length) {

      let tile = element.id; // For example: "e7"
      let previusHorizontalTile = tile.charAt(0); // For example: "e"
      let previusVerticalTile = Number(tile.charAt(1)); // For example: 7

      let pieceAndColor = element.children[0].id; // For example: "PAWN black"
      let attackingPiece = pieceAndColor.split(" ")[0]; // For example: "PAWN"
      let color = pieceAndColor.split(" ")[1]; // For example: "black"

      // We must check only the tiles pawn can take. 
      if (ourColor !== color && attackingPiece === "PAWN") {

        const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

        let xMovement = previusVerticalTile - newVerticalKingTile;
        let yMovement = Math.abs(Number(verticalAxis.indexOf(previusHorizontalTile)) - Number(verticalAxis.indexOf(newHorizontalTile)));

        
        // Here we check only the tiles pawn can take (taking the color into account).
        if (color === "black" && yMovement === 1 && xMovement === 1) flag.push(true);
        if (color === "white" && yMovement === 1 && xMovement === -1) flag.push(true);
      }

      if (ourColor !== color && attackingPiece === "KING") {
        
        // const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

        // let xMovement = Math.abs(previusVerticalTile - newVerticalKingTile);
        // let yMovement = Math.abs(Number(verticalAxis.indexOf(previusHorizontalTile)) - Number(verticalAxis.indexOf(newHorizontalTile)));

        // // Here we check only the tiles pawn can take.
        // if (yMovement === 1 && xMovement === 1) flag.push(true);

        const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
        
        let xMovement = Math.abs(previusVerticalTile - newVerticalKingTile);
        let yMovement = Math.abs(Number(verticalAxis.indexOf(previusHorizontalTile)) - Number(verticalAxis.indexOf(newHorizontalKingTile)));

        // Here we check only the tiles pawn can take (taking the color into account).
        if (yMovement <= 1 && xMovement <= 1) flag.push(true);
      }
    
  
      

      if (ourColor !== color && attackingPiece !== "KING" && attackingPiece !== "PAWN") {
        var referee = new Referee();
        
        if (referee.isValidMove(previusHorizontalTile, previusVerticalTile, newHorizontalKingTile, newVerticalKingTile, attackingPiece, color)) {
          flag.push(true);
        }
      }
    }
  });

  return !flag.includes(true);  
}
