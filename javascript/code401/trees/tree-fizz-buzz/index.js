'use strict';

const { KaryTree, KaryNode } = require('../index.js');
const { Queue } = require('../../stack_Queue/index.js');

// let tree = new KaryTree();
// tree.root = new KaryNode(15);
// tree.root.child[0] = new KaryNode(100);
// tree.root.child[1] = new KaryNode(72);
// tree.root.child[2] = new KaryNode(101);
// tree.root.child[0].child[0] = new KaryNode(20);
// tree.root.child[0].child[1] = new KaryNode(42);
// tree.root.child[1].child[0] = new KaryNode(0);


function fizzBuzzTree(tree){
  let queue = new Queue();
  let current = tree.root;
  queue.enqueue(current);
  while(current){
    current = queue.dequeue();
    if(current?.value % 3 === 0 && current?.value % 5 === 0){
      current.value = "FizzBuzz";
    } else if (current?.value % 3 === 0){
      current.value = "Fizz";
    } else if (current?.value % 5 === 0){
      current.value = "Buzz";
    } else if (typeof current?.value === 'number'){
      current.value = `${current?.value}`
    }
    for(let i = 0; i < current?.child.length; i++){
      queue.enqueue(current.child[i]);
    }
  }
  return tree;
}

module.exports = { fizzBuzzTree };

// let testTree = fizzBuzzTree(tree);
// console.log(testTree);


