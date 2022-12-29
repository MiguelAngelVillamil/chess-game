export default function turnCatcher(piece: string, moves: number) {
  if (moves % 2 === 0 && piece === "white") return true;
  if (moves % 2 !== 0 && piece === "black") return true;
  return false;
}