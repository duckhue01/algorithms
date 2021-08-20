const arr = [8, 8, 1, 1, 1, 7, 6, 5, 4, 3, 1, 3, 12, 31];

const CountingSort = (arr) => {
  const countArr =  Array.from(new Array(100), () => 0);
  const out = new Array(arr.length);

  arr.forEach((e) => {
    countArr[e]++
  });
  countArr.forEach((e, i, arr) => {
    if (i > 0) {
      arr[i] += arr[i - 1];
    }
  });

  for (let i = arr.length - 1; i >= 0; i--) {
    out[countArr[arr[i]] - 1] = arr[i];
    --countArr[arr[i]];
  }

  console.log(out);
  
};


CountingSort(arr)



// time complexity O n + b
// auxiliary space O n + k

// stable : yes