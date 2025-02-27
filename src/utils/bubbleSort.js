const bubbleSort = async (array, dispatch, actions) => {
  const localArray = [...array];
  for (let i = 0; i < localArray.length - 1; ++i) {
    dispatch(
      actions.setStatus({
        index: 0,
        status: "pending",
      })
    );
    for (let j = 0; j < localArray.length - 1 - i; ++j) {
      dispatch(
        actions.setStatus({
          index: j + 1,
          status: "pending",
        })
      );
      await new Promise((resolve) => setTimeout(resolve, 100));

      if (localArray[j] > localArray[j + 1]) {
        const tmp = localArray[j];
        localArray[j] = localArray[j + 1];
        localArray[j + 1] = tmp;

        dispatch(actions.swapItem([j, j + 1]));
      }
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(
        actions.setStatus({
          index: j,
          status: "none",
        })
      );
    }
    dispatch(
      actions.setStatus({
        index: array.length - 1 - i,
        status: "complete",
      })
    );
  }

  dispatch(
    actions.setStatus({
      index: 0,
      status: "complete",
    })
  );
};

export default bubbleSort;
