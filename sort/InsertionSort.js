// @ts-check


// desending
const InsertionSort = (arr) => {
  const swap = (i, k) => {
    let temp
    temp = arr[i]
    arr[i] = arr[k]
    arr[k] = temp

  };

  for (let i = 1; i < arr.length; i++) {
    for (let k = i - 1; k >= 0; k--) {
      if (arr[i] > arr[k]) {
        swap(i, k)
      }
    }
  }
};


const arr = [6, 5, 4, 3, 2, 1];

InsertionSort(arr);
console.log(arr);


// time complexity: O n^2

// auxilary space: O 1

// stable : yes


// insertion sort vs binary insertion sort : I didn't think bis is 
// better because each phase in bis we need a bund of swaps to get
// the space to insert the node so the time complexity is O n^2

// uses: insertion sort is used when number of node is small and almost node is sorted 
// before or only few elements are miplaced im big array



