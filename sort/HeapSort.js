const arr = [7, 6, 5, 4, 3, 2, 1];
// parent = i
// left child =  2 * i + 1
// right child = 2 * i+ 2

// 1. build max heap form input data
// 2. extract top element then put to arr
// 3.heapify(i)

// ascending
const heapSort = () => {
  let size = arr.length - 1;

  for (let i = Math.floor(size / 2); i >= 0; i--) {
    maxHeapify(i, size);
  }

  for (let i = size; i > 0; i--) {
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    maxHeapify(0, i - 1)
  }

  function maxHeapify(i, size) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    
    let largest = i;

    if (arr[leftChild] > arr[largest] && leftChild <= size) {
        largest = leftChild;
    }

    if (arr[rightChild] > arr[largest] && rightChild <= size) {
        largest = rightChild
    }
    if (largest !== i) {
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        maxHeapify(largest, size);
    }




    };
};


heapSort();
console.log(arr);

// in place : yes
// stable: no but can be made stable by other implementaion and with extra space
// auxilary space: O 1
// time complexity : 
// build heap : O n
// heapify: O logn
// heap sort O nlogn because each time we extract 1 element form top we need to heapify