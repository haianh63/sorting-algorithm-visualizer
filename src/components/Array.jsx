import ArrayUnit from "./ArrayUnit";
import { useSelector } from "react-redux";
import classes from "./Array.module.css";

export default function Array() {
  const selectionSortState = useSelector(
    (state) => state.selectionSort.uiStatus
  );
  return (
    <div
      className={classes.array}
      style={{
        height: "300px",
      }}
    >
      {selectionSortState.map((item) => {
        return (
          <ArrayUnit
            value={item.value}
            xCoordinate={item.xCoordinate}
            yCoordinate={item.yCoordinate}
            status={item.status}
          />
        );
      })}
    </div>
  );
}
