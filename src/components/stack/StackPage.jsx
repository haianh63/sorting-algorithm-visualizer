import { useDispatch, useSelector } from "react-redux";
import { actions as stackActions } from "../../store/stack-slice";
import Stack from "./Stack";
import { useState } from "react";

const WIDTH = 80;
const MAX_SIZE = 7;

export default function StackPage() {
  const stackSize = useSelector((state) => state.stack.uiStatus).length;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddValue = () => {
    if (value !== "") {
      dispatch(stackActions.addValue(value));
    }
  };

  const handlePopValue = async () => {
    dispatch(
      stackActions.setYCoordinate({
        index: stackSize - 1,
        yCoordinate: WIDTH * MAX_SIZE + 10,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch(
      stackActions.setXCoordinate({
        index: stackSize - 1,
        xCoordinate: WIDTH + 10,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 500));

    dispatch(stackActions.popValue());
  };
  return (
    <>
      <Stack />
      <input type="number" value={value} onChange={handleValueChange} />
      <button onClick={handleAddValue}>Add Value</button>
      <button onClick={handlePopValue}>Pop Value</button>
    </>
  );
}
