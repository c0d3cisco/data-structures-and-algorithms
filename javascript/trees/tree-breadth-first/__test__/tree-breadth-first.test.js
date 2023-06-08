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

  test('breadthFirst tree with one node', () => {
    let tree = new Tree();
    tree.root = new Node(12);
    const results = breadthFirst(tree);
    expect(results).toEqual([12]);
  });

  test('breadthFirst tree with infinity', () => {
    let tree = new Tree();
    tree.root = new Node(1);
    tree.root.left = new Node(3);
    tree.root.right = new Node(4);
    tree.root.left.left = new Node(Infinity);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(8);
    const results = breadthFirst(tree);
    expect(results).toEqual([1, 3, 4, Infinity, 5, 8]);
  });
});

