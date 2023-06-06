'use strict';

const { Tree, Node } = require('../../index.js');
// For a Binary Search Tree, define a method for each of the depth first traversals:
// 1) pre order
// 2) in order
// 3) post order

// For a Binary Search Tree, Test method addValue(value)
//    Arguments: value
//    Return: nothing
//    Adds a new node with that value in the correct location in the binary search tree.
// For a Binary Search Tree, Test method contains(value)
//    Argument: value
//    Returns: boolean indicating whether or not the value is in the tree at least once.


describe('Tree', () => {
  test('preOrder', () => {
    // For a Binary Search Tree
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const results = tree.preOrder();
    expect(results).toEqual([10, 5, 1, 8, 15, 17]);
  });

  test('inOrder', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const results = tree.inOrder();
    expect(results).toEqual([1, 5, 8, 10, 15, 17]);
  });

  test('postOrder', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const results = tree.postOrder();
    expect(results).toEqual([1, 8, 5, 17, 15, 10]);
  });

  test('addValue', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    tree.addValue(-1);
    tree.addValue(-1);
    tree.addValue(20);
    tree.addValue(20);
    tree.addValue(7);

    const results = tree.inOrder();
    expect(results).toEqual([-1, 1, 5, 7, 8, 10, 15, 17, 20]);
  });

  test('contains', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.contains(1)).toBeTruthy();
    expect(tree.contains(-3)).toBeFalsy();

  });

});
