'use strict';

const { Tree, Node } = require('../index.js');
const { Queue } = require('../../stack_Queue/index.js');

// let tree = new Tree();
// tree.root = new Node(12);
// tree.root.left = new Node(59);
// tree.root.right = new Node(-15);
// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(2);
// tree.root.right.right = new Node(17);

function breadthFirst(tree){
  let queue = new Queue();
  let outputArray = [];
  let current = tree.root;
  while(current){
    outputArray.push(current.value);
    if(current.left) queue.enqueue(current.left);
    if(current.right) queue.enqueue(current.right);
    current = queue.dequeue();
  }
  return outputArray;
}

// console.log(breadthFirst(tree));

module.exports = { breadthFirst };



