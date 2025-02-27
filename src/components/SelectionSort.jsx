import { useState } from "react";
import Array from "./Array";
const GAP = 10;
const WIDTH = 50;

export default function SelectionSort({ array, sortInfo }) {
  const [unitsInfo, setUnitsInfo] = useState(getInfo(array));
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < sortInfo.length) {
      swap(sortInfo[currentStep][0], sortInfo[currentStep][1]);
      setCurrentStep((currentStep) => currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      swap(sortInfo[currentStep - 1][0], sortInfo[currentStep - 1][1]);
      setCurrentStep((currentStep) => currentStep - 1);
    }
  };

  const swap = (i, j) => {
    setUnitsInfo((unitsInfo) => {
      const newUnitsInfo = unitsInfo.map((unit) => ({ ...unit }));
      const tmp = newUnitsInfo[i].x;
      newUnitsInfo[i].x = newUnitsInfo[j].x;
      newUnitsInfo[j].x = tmp;
      return newUnitsInfo;
    });
  };

  return (
    <>
      <Array unitsInfo={unitsInfo} />
      <button onClick={handlePrevStep}>Prev</button>
      <button onClick={handleNextStep}>Next</button>
    </>
  );
}

function getInfo(array) {
  const info = [];
  for (let i = 0; i < array.length; ++i) {
    info.push({
      index: i,
      value: array[i],
      x: i * (WIDTH + GAP),
    });
  }

  return info;
}
