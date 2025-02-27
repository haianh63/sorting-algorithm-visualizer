const DELAY = 500;
const partition = async (arr, l, r, dispatch, actions) => {
  dispatch(
    actions.setStatus({
      index: r,
      status: "pivot",
    })
  );
  await new Promise((resolve) => setTimeout(resolve, DELAY));
  const pivot = arr[r];
  let i = l - 1;
  for (let j = l; j <= r; ++j) {
    if (arr[j] <= pivot) {
      i++;
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      if (j != r) {
        dispatch(
          actions.setStatus({
            index: j,
            status: "left-pivot",
          })
        );
      }
      dispatch(actions.swapItem([i, j]));
      await new Promise((resolve) => setTimeout(resolve, DELAY));
      continue;
    }
    dispatch(
      actions.setStatus({
        index: j,
        status: "right-pivot",
      })
    );
    await new Promise((resolve) => setTimeout(resolve, DELAY));
  }

  dispatch(
    actions.setStatus({
      index: i,
      status: "complete",
    })
  );
  await new Promise((resolve) => setTimeout(resolve, DELAY));
  return i;
};
const qSort = async (arr, left, right, dispatch, actions) => {
  if ((left != 0 || right != arr.length - 1) && left <= right) {
    dispatch(
      actions.moveVertical({
        left,
        right,
        amount: -50,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, DELAY));
  }

  if (left == right) {
    dispatch(
      actions.setStatus({
        index: left,
        status: "complete",
      })
    );
    dispatch(
      actions.moveVertical({
        left,
        right,
        amount: 50,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, DELAY));
  }
  if (right <= left) return;
  await new Promise((resolve) => setTimeout(resolve, DELAY));

  const mid = await partition(arr, left, right, dispatch, actions);
  dispatch(
    actions.moveVertical({
      mid,
      mid,
      amount: 50,
    })
  );
  for (let i = left; i <= mid - 1; ++i) {
    dispatch(
      actions.setStatus({
        index: i,
        status: "none",
      })
    );
  }
  for (let i = mid + 1; i <= right; ++i) {
    dispatch(
      actions.setStatus({
        index: i,
        status: "none",
      })
    );
  }
  await new Promise((resolve) => setTimeout(resolve, DELAY));
  await qSort(arr, left, mid - 1, dispatch, actions);
  await qSort(arr, mid + 1, right, dispatch, actions);

  dispatch(
    actions.moveVertical({
      left,
      right,
      amount: 50,
    })
  );

  await new Promise((resolve) => setTimeout(resolve, DELAY));
};

const quickSort = async (arr, dispatch, actions) => {
  const localArray = [...arr];
  await qSort(localArray, 0, arr.length - 1, dispatch, actions);
};

export default quickSort;
