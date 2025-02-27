import { useSelector } from "react-redux";
import StackUnit from "./StackUnit";

const WIDTH = 80;
const MAX_SIZE = 7;
const BORDER_COLOR = "#355F2E";
export default function Stack() {
  const isAnimate = useSelector((state) => state.stack.isAnimate);
  const uiStatus = useSelector((state) => state.stack.uiStatus);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: WIDTH,
          height: WIDTH * MAX_SIZE,
          border: `solid 2px ${BORDER_COLOR}`,
          marginInline: "auto",
          marginTop: "150px",
        }}
      >
        {uiStatus.map((item) => {
          return (
            <StackUnit
              value={item.value}
              xCoordinate={item.xCoordinate}
              yCoordinate={item.yCoordinate}
              isAnimate={isAnimate}
            />
          );
        })}
      </div>
    </>
  );
}
