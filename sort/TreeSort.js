arr = [11,24,12,3,12,31,23,12,3,12];

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const TreeSort = () => {
  let root = null;

  const insertRoot = (value) => {
    root = insert(root, value);
  };

  const insert = (root, value) => {
   
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value < root.value) {
      root.left = insert(root.left, value);
    }
    if (value > root.value) {
      root.right = insert(root.right, value);
    }

    return root;
  };

  for (let i = 0; i < arr.length; i++) {
    insertRoot(arr[i]);
  }

  const print = (root) => {
    if (root !== null) {
      print(root.left);
      console.log(root.value + " - ");
      print(root.right);
    }
  };

  print(root);
};

TreeSort();



// average c ase time complexity O nlogn adding one item to binary search
// tree takes O logn time . therefore adding n item to bst take O nlogn time


// worst case time complexity: O n2 because in case of the height of tree is 
// n is the number of element of array but we can improve it by by using a 
// avl tree it is a self balancing binary search tree


// auxilary space: O n
// stable: no because we can't implement bst with same node