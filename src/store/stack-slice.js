import { createSlice } from "@reduxjs/toolkit";
import generateRandomArray from "../utils/randomArray";
const SIZE = 3;
const MAX_VALUE = 50;
const MAX_SIZE = 7;
const WIDTH = 80;

const randomArray = generateRandomArray(SIZE, MAX_VALUE);
const uiInitialStatus = randomArray.map((value, index) => {
  return {
    value: value,
    yCoordinate: index * WIDTH,
    xCoordinate: 0,
  };
});

const stackSlice = createSlice({
  name: "stack",
  initialState: {
    isAnimate: false,
    uiStatus: uiInitialStatus,
  },
  reducers: {
    addValue(state, action) {
      if (!state.isAnimate) {
        state.isAnimate = true;
      }
      const currentSize = state.uiStatus.length;
      if (currentSize < MAX_SIZE) {
        state.uiStatus.push({
          value: action.payload,
          yCoordinate: currentSize * WIDTH,
          xCoordinate: 0,
        });
      }
    },

    popValue(state) {
      if (!state.isAnimate) {
        state.isAnimate = true;
      }
      state.uiStatus.pop();
    },

    setYCoordinate(state, action) {
      const index = action.payload.index;
      const newYCoordinate = action.payload.yCoordinate;

      if (0 <= index && index < state.uiStatus.length) {
        state.uiStatus[index].yCoordinate = newYCoordinate;
      }
    },

    setXCoordinate(state, action) {
      const index = action.payload.index;
      const newXCoordinate = action.payload.xCoordinate;

      if (0 <= index && index < state.uiStatus.length) {
        state.uiStatus[index].xCoordinate = newXCoordinate;
      }
    },
  },
});

export default stackSlice;

export const actions = stackSlice.actions;
