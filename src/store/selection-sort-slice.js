import { createSlice } from "@reduxjs/toolkit";
import generateRandomArray from "../utils/randomArray";
import { WIDTH, GAP } from "../utils/constant";

const SIZE = 10;
const MAX_VALUE = 50;

const randomArray = generateRandomArray(SIZE, MAX_VALUE);
const uiInitialStatus = randomArray.map((value, index) => {
  return {
    status: "none",
    index: index,
    value: value,
    xCoordinate: index * (WIDTH + GAP),
    yCoordinate: 0,
  };
});
const selectionSortSlice = createSlice({
  name: "selection-sort",
  initialState: {
    actualArray: randomArray,
    uiStatus: uiInitialStatus,
    isVisualizing: false,
    isReset: true,
  },
  reducers: {
    setStatus(state, action) {
      const idx = action.payload.index;
      const status = action.payload.status;
      const uiStatusItem = state.uiStatus.find((item) => item.index === idx);
      uiStatusItem.status = status;
    },
    swapItem(state, action) {
      const i = action.payload[0];
      const j = action.payload[1];

      const tmpValue = state.actualArray[i];
      state.actualArray[i] = state.actualArray[j];
      state.actualArray[j] = tmpValue;

      const uiStatusItem1 = state.uiStatus.find((item) => item.index === i);
      const uiStatusItem2 = state.uiStatus.find((item) => item.index === j);

      const tmpXCoordinate = uiStatusItem1.xCoordinate;
      uiStatusItem1.xCoordinate = uiStatusItem2.xCoordinate;
      uiStatusItem2.xCoordinate = tmpXCoordinate;

      const tmp = uiStatusItem1.index;
      uiStatusItem1.index = uiStatusItem2.index;
      uiStatusItem2.index = tmp;
    },
    moveVertical(state, action) {
      const left = action.payload.left;
      const right = action.payload.right;
      for (let i = left; i <= right; ++i) {
        const uiStatusItem = state.uiStatus.find((item) => item.index === i);
        uiStatusItem.yCoordinate += action.payload.amount;
      }
    },
    reset(state) {
      const newRandomArray = generateRandomArray(
        state.actualArray.length,
        MAX_VALUE
      );
      state.actualArray = newRandomArray;
      state.uiStatus.map((item, index) => {
        item.status = "none";
        item.index = index;
        item.value = newRandomArray[index];
        item.xCoordinate = index * (WIDTH + GAP);
        item.yCoordinate = 0;
      });

      state.isViualizing = false;
      state.isReset = true;
    },
    setIsVisualizing(state, action) {
      state.isVisualizing = action.payload;
    },

    setIsReset(state, action) {
      state.isReset = action.payload;
    },
  },
});

export const actions = selectionSortSlice.actions;

export default selectionSortSlice;
