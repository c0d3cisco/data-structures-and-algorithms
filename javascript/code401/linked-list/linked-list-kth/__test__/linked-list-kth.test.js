'use strict';

const { SinglyLinkedList } = require('../../index.js');

console.log('SinglyLinkedList>>>', SinglyLinkedList);


describe('Linked List Kth Value from the End', () => {
  test('Where k is greater than the length of the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    expect(list.kthFromEnd(4)).toEqual(null);
  });
  test('Where k and the length of the list are the same', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    expect(list.kthFromEnd(3)).toEqual(null);
  });
  test('Where k is not a positive integer', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    expect(list.kthFromEnd(-1)).toEqual(null);
  });
  test('Where the linked list is of a size 1', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('a');
    expect(list.kthFromEnd(0)).toEqual('a');
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    expect(list.kthFromEnd(1)).toEqual('b');
  });
});
