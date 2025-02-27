const selectionSort = async (array, dispatch, actions) => {
  const localArray = [...array];
  for (let i = 0; i < localArray.length; i++) {
    let minIdx = i;
    for (let j = i; j < localArray.length; ++j) {
      dispatch(
        actions.setStatus({
          index: j,
          status: "pending",
        })
      );
      if (localArray[j] < localArray[minIdx]) {
        minIdx = j;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      dispatch(
        actions.setStatus({
          index: j,
          status: "none",
        })
      );
    }

    const tmp = localArray[i];
    localArray[i] = localArray[minIdx];
    localArray[minIdx] = tmp;

    dispatch(actions.swapItem([i, minIdx]));
    dispatch(
      actions.setStatus({
        index: i,
        status: "complete",
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

export default selectionSort;
