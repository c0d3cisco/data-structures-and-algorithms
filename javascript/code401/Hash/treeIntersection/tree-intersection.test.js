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

  if(!treeOne.root || !treeTwo.root){
    return results;
  }

  function treeTraversal(tree, hashMap) {
    let current = tree.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      // console.log(node.value);
      hashMap.set(node.value, node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
  }
  treeTraversal(treeOne, firstHashMap);
  treeTraversal(treeTwo, secondHashMap);


  let firstHashKeys = firstHashMap.keys();
  for (let i = 0; i < firstHashKeys.length; i++) {
    if (secondHashMap.has(firstHashKeys[i])) {
      results.push(firstHashKeys[i]);
    }
  }
  console.log(results);
  return results;
}

// set up tests that test the function treeIntersection above
// include test for empty trees, trees with no matching values, trees with matching values, and trees with multiple matching values, and an empty tree, and a tree with no matching values

describe('Tree Intersection', () => {
  test('Should return an array of matching values', () => {
    const expected = [
      '200', '350',
      '100', '250',
      '175', '150',
      '500'
    ];
    expect(treeIntersection(tree1, tree2)).toEqual(expected);
  }
  );
  test('Should return an empty array if the first tree is empty', () => {
    const expected = [];
    expect(treeIntersection(new Tree(), tree2)).toEqual(expected);
  }
  );
  test('Should return an empty array if the second tree is empty', () => {
    const expected = [];
    expect(treeIntersection(tree1, new Tree())).toEqual(expected);
  });
});



