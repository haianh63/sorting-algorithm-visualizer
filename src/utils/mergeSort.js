async function merge(arr, start, mid, end, dispatch, actions) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;
      while (index != start) {
        arr[index] = arr[index - 1];
        dispatch(actions.swapItem([index, index - 1]));
        await new Promise((resolve) => setTimeout(resolve, 300));
        index--;
      }
      arr[start] = value;
      start++;
      mid++;
      start2++;
    }
  }
}

async function mergeSortHelper(
  arr,
  left,
  right,
  dispatch,
  actions,
  delay = 500
) {
  if ((left != 0 || right != arr.length - 1) && left <= right) {
    dispatch(
      actions.moveVertical({
        left,
        right,
        amount: -50,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (left >= right) {
    return;
  }

  let mid = Math.floor((left + right) / 2);
  await mergeSortHelper(arr, left, mid, dispatch, actions);
  await mergeSortHelper(arr, mid + 1, right, dispatch, actions);
  await merge(arr, left, mid, right, dispatch, actions);

  dispatch(
    actions.moveVertical({
      left,
      right,
      amount: 50,
    })
  );
  await new Promise((resolve) => setTimeout(resolve, delay));
}

async function mergeSort(arr, dispatch, actions) {
  const localArray = [...arr];
  await mergeSortHelper(localArray, 0, arr.length - 1, dispatch, actions);
}
export default mergeSort;
