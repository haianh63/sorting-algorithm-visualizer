import { useState } from "react";
import Array from "./components/Array";
import { useDispatch, useSelector } from "react-redux";
import { actions as selectionSortActions } from "./store/selection-sort-slice";
import { PlayIcon, PauseIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import selectionSort from "./utils/selectionSort";
import bubbleSort from "./utils/bubbleSort";
import quickSort from "./utils/quickSort";
import mergeSort from "./utils/mergeSort";

const sortingAlgorithms = {
  "Selection Sort": selectionSort,
  "Bubble Sort": bubbleSort,
  "Quick Sort": quickSort,
  "Merge Sort": mergeSort,
};

function App() {
  const [currentSortingAlgorithm, setCurrentSortingAlgorithm] =
    useState("Selection Sort");

  const dispatch = useDispatch();
  const array = useSelector((state) => state.selectionSort.actualArray);

  const handleResetArray = () => {
    dispatch(selectionSortActions.reset());
  };

  const handleSortArray = async () => {
    dispatch(selectionSortActions.setIsVisualizing(true));
    dispatch(selectionSortActions.setIsReset(false));
    await sortingAlgorithms[currentSortingAlgorithm](
      array,
      dispatch,
      selectionSortActions
    );
    dispatch(selectionSortActions.setIsVisualizing(false));
  };

  const isVisualizing = useSelector(
    (state) => state.selectionSort.isVisualizing
  );
  console.log(isVisualizing);
  const isReset = useSelector((state) => state.selectionSort.isReset);
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <h1 className="font-bold text-xl my-5">Sorting Algorithm Visualizer</h1>
      <div className="w-full max-w-6xl">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <select
            onChange={(e) => setCurrentSortingAlgorithm(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none"
          >
            {Object.keys(sortingAlgorithms).map((algorithm) => {
              return <option value={algorithm}>{algorithm}</option>;
            })}
          </select>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSortArray}
              disabled={isVisualizing || !isReset}
              className={`flex items-center px-4 py-2 font-medium rounded-lg transition-colors cursor-pointer
                ${
                  isVisualizing
                    ? "bg-gray-100 text-gray-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isVisualizing || !isReset ? (
                <>
                  <PauseIcon className="w-4 h-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <PlayIcon className="w-4 h-4 mr-2" />
                  Visualize
                </>
              )}
            </button>
            <button
              disabled={isVisualizing}
              className="flex items-center px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleResetArray}
            >
              <ArrowPathIcon className="w-4 h-4 mr-2" /> Reset
            </button>
          </div>
        </div>
        <Array />

        {/* <StackPage /> */}

        {/* <Maze /> */}
      </div>
    </div>
  );
}

export default App;
