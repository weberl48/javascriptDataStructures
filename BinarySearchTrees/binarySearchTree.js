// Binary Search Tree constructor
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
//Insert Method
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    // if no child node, place value there
    if (!this.left) this.left = new BST(value);
    // if there is a child node, run insert method on that node
    else this.left.insert(value);
  }
  else if (value > this.value)
    // if no child node, place value there
    if (!this.right) this.right = new BST(value);
    // if there is a child node, run insert method on that node
    else this.right.insert(value);
};

//Contains Method
BST.prototype.contains = function(value) {
  // If value is a match to nodes value return true
  if (value === this.value) return true;
  // if value is less than current value move to left child node
  else if (value < this.value) {
    // if there is no left child node, there is no match. return false
    if (!this.left) return false;
    // otherwise run the constains search method on the left node.
    else return this.left.contains(value);
  }
  // if value is greater than current value move to right child node
  else if (value > this.value) {
    // if there is no right child node, there is no match. return false
    if (!this.right) return false;
    // otherwise run the constains search method on the right node.
    else return this.right.contains(value);
  }
}
