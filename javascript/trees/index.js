'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    const results = [];

    // defining helper our function
    const traverse = (node) => {

      // left and right recursive cases
      results.push(node.value);
      if(node.left) {
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      // note IF there is no left and no right WE ARE DONE WITH THIS FUNCTION
    };
    // get the recursive party started
    traverse(this.root);
    return results;
  }

  inOrder(){
    const results = [];

    const traverse = (node) => {

      if(node.left) {
        traverse(node.left);
      }
      results.push(node.value); // performing our base case here makes this inOrder
      if(node.right){
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder(){
    const results = [];

    const traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      results.push(node.value); // performing our base case here makes this postOrder
    };
    traverse(this.root);
    return results;
  }

  addValue(newValue){
    let current = this.root;
    while(current){
      if(newValue < current.value) {
        if(!current.left){
          current.left = new Node(newValue);
          break;
        }
        current = current.left;
      } else if(newValue > current.value){
        if(!current.right){
          current.right = new Node(newValue);
          break;
        }
        current = current.right;
      } else {
        current = null;
      }
    }
  }

  contains(targetValue){
    let results = false;
    let x = 1;
    const traverse = (node) => {
      if(x){
        if(node.value === targetValue){
          results = true;
          x = 0;
        }
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  findMax(){
    let currentMax = 0;
    let node = this.root;
    const traverse = (node) => {
      if(node === null) {
        return currentMax = null;
      }
      // console.log(node.value);
      if (currentMax < node.value) {
        currentMax = node.value;
      }
      if(node.left !== null) {
        traverse(node.left);
      }
      if(node.right !== null) {
        traverse(node.right);
      }
    };
    traverse(node);
    return currentMax;
  }


}

module.exports = { Tree, Node };

// let tree = new Tree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(17);
// tree.root = new Node(12);
// tree.root.left = new Node(59);
// tree.root.right = new Node(-15);
// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(2);
// tree.root.right.right = new Node(17);

// console.log('-------preOrder-------');
// let results = tree.preOrder();
// console.log('preOrder results:', results);
// console.log('-------inOrder-------');
// results = tree.inOrder();
// console.log('inOrder results:', results);
// console.log('-------postOrder-------');
// results = tree.postOrder();
// console.log('postOrder results:', results);
// console.log('max value', tree.findMax());

