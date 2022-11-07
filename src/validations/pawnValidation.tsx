const verticalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function pawnValidation(
  previusHorizontalTile: string,
  previusVerticalTile: number,
  newHorizontalTile: string,
  newVerticalTile: number,
  color: string | undefined
) {

  if (color === "white") {
    // It's in the same HorizontalAxis (e)
    if (previusHorizontalTile === newHorizontalTile) {
      // There's no piece foward
      if (
        !document.getElementById(
          (newHorizontalTile + newVerticalTile).toString()
        )?.children.length
      ) {
        // If the pawn is at the initial position.
        if (Number(previusVerticalTile) === 2) {
          
          return (
            newVerticalTile - previusVerticalTile <= 2 &&
            newVerticalTile - previusVerticalTile > 0
          );
        } else {
          return (
            newVerticalTile - previusVerticalTile <= 1 &&
            newVerticalTile - previusVerticalTile > 0
          );
        }
      }
    } else {
      // There's a piece foward.
      if (
        document.getElementById((newHorizontalTile + newVerticalTile).toString())?.children.length
      ) {
        //Can only move one tile to the right or one tile to the left.
        if (
          verticalAxis.indexOf(newHorizontalTile) -
            verticalAxis.indexOf(previusHorizontalTile) <
            2 &&
          verticalAxis.indexOf(newHorizontalTile) -
            verticalAxis.indexOf(previusHorizontalTile) >
            -2
        ) {
          // Can't move by side.
          if (newVerticalTile !== previusVerticalTile) {
            // Can't go back
            return newVerticalTile > previusVerticalTile;
          }
        }
      }
    }
  }

  if (color === "black") {
    // It's in the same HorizontalAxis (e)
    if (previusHorizontalTile === newHorizontalTile) {
      // There's no piece foward
      if (
        !document.getElementById(
          (newHorizontalTile + newVerticalTile).toString()
        )?.children.length
      ) {
        // If the pawn is at the initial position.
        if (Number(previusVerticalTile) === 7) {
          return (
            previusVerticalTile - newVerticalTile <= 2 &&
            previusVerticalTile - newVerticalTile > 0
          );
        } else {
          return (
            previusVerticalTile - newVerticalTile <= 1 &&
            previusVerticalTile - newVerticalTile > 0
          );
        }
      }
    } else {
      // There's a piece foward.
      if (
        document.getElementById(
          (newHorizontalTile + newVerticalTile).toString()
        )?.children.length
      ) {
        //Can only move one tile to the right or one tile to the left.
        if (
          verticalAxis.indexOf(newHorizontalTile) -
            verticalAxis.indexOf(previusHorizontalTile) <
            2 &&
          verticalAxis.indexOf(newHorizontalTile) -
            verticalAxis.indexOf(previusHorizontalTile) >
            -2
        ) {
          // Can't move by side.
          if (newVerticalTile !== previusVerticalTile) {
            // Can't go back
            return newVerticalTile < previusVerticalTile;
          }
        }
      }
    }
  }


  return false;
}
