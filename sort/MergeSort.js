
const arr = [7, 6, 5, 4, 3,  6, 7, 2, 1];
// ascending
const MergeSort = (left, right) => {
  if (left < right) {
    const middle = left + Math.floor((right - left) / 2);

    MergeSort(left, middle);
    MergeSort(middle + 1, right);
    Merge(left, right, middle);
  }

  return;
};

const Merge = (left, right, middle) => {
  let i = 0;
  let j = 0;
  let k = left;
  const left_arr = new Array(middle - left + 1);
  const right_arr = new Array(right - middle);

  for (let i = 0; i < left_arr.length; i++) {
    left_arr[i] = arr[left + i];
  }

  for (let i = 0; i < right_arr.length; i++) {
    right_arr[i] = arr[middle + 1 + i];
  }

  while (i < left_arr.length && j < right_arr.length) {
    if (left_arr[i] <= right_arr[j]) {
      arr[k] = left_arr[i];
      i++;
    } else {
      arr[k] = right_arr[j];
      j++;
    }
    k++;
  }
  while (i < left_arr.length) {
    arr[k] = left_arr[i];
    i++;
    k++;
  }

  while (j < right_arr.length) {
    arr[k] = right_arr[j];
    j++;
    k++;
  }
};

MergeSort(0, arr.length - 1);
console.log(arr);



// time complexity O nlogn because this algo continously diviced arr into two halves
// so the number of phase is logn and each phase take 0 n so time complexity is nlogn

// auxilary space O n

// Sorting In Place: No in a typical implementation

// Stable: Yes

// aplication of merge soft: 
//    + linked list sorting: linked list can be insert items in the middle in 0 1 extra space
// and time so the merge opertation can me implement without extra space
