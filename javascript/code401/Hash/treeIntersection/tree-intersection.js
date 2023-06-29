'use strict';

const HashTable = require('..');
const { Tree, Node } = require('../../trees/index.js');

const tree1 = new Tree();
tree1.root = new Node('150');
tree1.root.left = new Node('100');
tree1.root.right = new Node('250');
tree1.root.left.left = new Node('75');
tree1.root.left.right = new Node('160');
tree1.root.right.left = new Node('200');
tree1.root.right.right = new Node('350');
tree1.root.left.right.left = new Node('125');
tree1.root.left.right.right = new Node('175');
tree1.root.right.right.left = new Node('300');
tree1.root.right.right.right = new Node('500');

const tree2 = new Tree();
tree2.root = new Node('42');
tree2.root.left = new Node('100');
tree2.root.right = new Node('600');
tree2.root.left.left = new Node('15');
tree2.root.left.right = new Node('160');
tree2.root.right.left = new Node('200');
tree2.root.right.right = new Node('350');
tree2.root.left.right.left = new Node('125');
tree2.root.left.right.right = new Node('175');
tree2.root.right.right.left = new Node('4');
tree2.root.right.right.right = new Node('500');

function treeIntersection(treeOne, treeTwo){
  const firstHashMap = new HashTable(1024);
  const secondHashMap = new HashTable(1024);
  let results = [];

  function treeTraversal(tree, hashMap) {
    let current = tree.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      console.log(node.value);
      hashMap.set(node.value, node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
  }
  treeTraversal(treeOne, firstHashMap);
  treeTraversal(treeTwo, secondHashMap);

  // console.log(firstHashMap);
  // console.log(secondHashMap);

  let firstHashKeys = firstHashMap.keys();
  // console.log(firstHashKeys);

  for (let i = 0; i < firstHashKeys.length; i++) {
    if (secondHashMap.has(firstHashKeys[i])) {
      results.push(firstHashKeys[i]);
    }
  }
  return results;
}

console.log(treeIntersection(tree1, tree2));

// module.exports = treeIntersection;

