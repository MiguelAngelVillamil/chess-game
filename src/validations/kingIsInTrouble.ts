

export default function kingIsInTrouble(checkedTiles: string[], ourColor: string) {

  let kingTile = "";

  let tilesArray = Object.assign([], document.getElementsByClassName("tile"));

  tilesArray.forEach((element: HTMLDivElement) => {

    // Only work with the tiles that have a piece inside.
    if (element.children.length) {

      let tile = element.id; // For example: "e7"

      let pieceAndColor = element.children[0].id; // For example: "PAWN black"
      let attackingPiece = pieceAndColor.split(" ")[0]; // For example: "PAWN"
      let color = pieceAndColor.split(" ")[1]; // For example: "black"

      if(attackingPiece === "KING" && color === ourColor) {

        console.log(`Casillas hackeadas por el ${color}: ${checkedTiles}`)
        console.log(tile)
        console.log(`La casilla ${tile} esta siendo hackeada: ${checkedTiles.includes(tile)}`)
        if (checkedTiles.includes(tile)) kingTile = tile;
      }
    }
  });

  return !checkedTiles.includes(kingTile)
}