'use strict';

const { KaryTree, KaryNode } = require('../../index.js');
const { fizzBuzzTree } = require('../index.js');

let tree = new KaryTree();
tree.root = new KaryNode(15);
tree.root.child[0] = new KaryNode(100);
tree.root.child[1] = new KaryNode(72);
tree.root.child[2] = new KaryNode(101);
tree.root.child[0].child[0] = new KaryNode(20);
tree.root.child[0].child[1] = new KaryNode(42);
tree.root.child[1].child[0] = new KaryNode(0);

describe('fizzBuzzTree', () => {
  test('fizzBuzzTree happy path', () => {
    const results = fizzBuzzTree(tree);
    expect(results.root.value).toEqual('FizzBuzz');
    expect(results.root.child[0].value).toEqual('Buzz');
    expect(results.root.child[1].value).toEqual('Fizz');
    expect(results.root.child[2].value).toEqual('101');
  });

  test('fizzBuzzTree empty tree test', () => {
    let tree = new KaryTree();
    const results = fizzBuzzTree(tree);
    expect(results.root).toEqual(null);
  });

});
