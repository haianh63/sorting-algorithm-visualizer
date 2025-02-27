const WIDTH = 40;
export default function Cell({ wall }) {
  return (
    <div
      style={{
        width: WIDTH,
        height: WIDTH,
        boxSizing: "border-box",
        borderLeft: wall[0] == 1 ? "solid 3px black" : "",
        borderTop: wall[1] == 1 ? "solid 3px black" : "",
        borderRight: wall[2] == 1 ? "solid 3px black" : "",
        borderBottom: wall[3] == 1 ? "solid 3px black" : "",
      }}
    ></div>
  );
}
