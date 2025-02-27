import Cell from "./Cell";
import generateMaze from "../../utils/generateMaze";
export default function Maze() {
  const maze = generateMaze(15, 15);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {maze.map((row) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((wall) => {
              return <Cell wall={wall} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
