'use strict';

const { Tree, Node } = require('../../index.js');
const { breadthFirst } = require('../index.js');

describe('Tree', () => {


  let tree = new Tree();
  tree.root = new Node(12);
  tree.root.left = new Node(59);
  tree.root.right = new Node(-15);
  tree.root.left.left = new Node(3);
  tree.root.left.right = new Node(2);
  tree.root.right.right = new Node(17);

  test('breadthFirst happy path', () => {
    const results = breadthFirst(tree);
    expect(results).toEqual([12, 59, -15, 3, 2, 17]);
  });

  test('breadthFirst empty tree', () => {
    let tree = new Tree();
    const results = breadthFirst(tree);
    expect(results).toEqual([]);
  });
});

