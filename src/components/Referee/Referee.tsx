export default class Referee {
  isValidMove(
    previusHorizontalTile: string | undefined,
    previusVerticalTile: number | undefined,
    newHorizontalTile: string | undefined,
    newVerticalTile: number | undefined, 
    piece: string | undefined) {
    console.log(`${previusHorizontalTile}${previusVerticalTile} to ${newHorizontalTile}${newVerticalTile} ${piece}`);
    
    return true;
  }
}