// @ts-check
const list = [1, 2, 3, 4, 5, 6];
//0  1  2  3  4  5
//0 1 2 3 4 5 6
const number = 1;
function RecursiveBinarySort(start, end) {
  let middle = start + Math.floor((end - start) / 2);

  if (list[middle] === number) {
    return 1;
  }
  if (number < list[middle] && middle > start) {
    return RecursiveBinarySort(start, middle - 1);
  }

  if (number > list[middle] && middle < end) {
    return RecursiveBinarySort(middle + 1, end);
  }

  return -1;
}
// time complexity O(log(n))
// auxilary space O(log(n))

// console.log(RecursiveBinarySort(0, list.length - 1));

function iterativeBinarySort(start, end) {
  let middle = start + Math.floor((end - start) / 2);


  while (middle >= start && middle <= end) {
    

    if (list[middle] === number) {
      return 1;
    }

    if (number < list[middle]) {
      middle = start + Math.floor((middle  - start)/ 2)
    }
    if (number > list[middle]) {
      middle = middle + Math.ceil((end - middle)/ 2)
    }


  }

  return -1;




}

// time complexity O(log(n))
// auxilary space O(log(1))



console.log(iterativeBinarySort(0, list.length - 1));

console.log(Math.pow(2, 100));

// use int mid = low + (high – low)/2 because low + high can be out of range of int maximun 
// value so mid can be negative