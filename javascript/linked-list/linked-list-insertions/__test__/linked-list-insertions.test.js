// Can successfully add a node to the end of the linked list
// Can successfully add multiple nodes to the end of a linked list
// Can successfully insert a node before a node located i the middle of a linked list
// Can successfully insert a node before the first node of a linked list
// Can successfully insert after a node in the middle of the linked list
// Can successfully insert a node after the last node of the linked list

'use strict';

const { SinglyLinkedList } = require('../..');

describe('Linked List Insertions', () => {
  test('Can successfully add a node to the end of the linked list and Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    list.append('d');
    list.append('e');
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('b');
    expect(list.head.next.next.data).toEqual('c');
    expect(list.head.next.next.next.data).toEqual('d');
    expect(list.head.next.next.next.next.data).toEqual('e');
    expect(list.head.next.next.next.next.next).toBeNull();
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    list.insertBefore('b', 'd');
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('d');
    expect(list.head.next.next.data).toEqual('b');
    expect(list.head.next.next.next.data).toEqual('c');
    expect(list.head.next.next.next.next).toBeNull();
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    list.insertBefore('a', 'd');
    // console.log('*********', list);
    expect(list.head.data).toEqual('d');
    expect(list.head.next.data).toEqual('a');
    expect(list.head.next.next.data).toEqual('b');
    expect(list.head.next.next.next.data).toEqual('c');
    expect(list.head.next.next.next.next).toBeNull();
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    list.insertAfter('b', 'd');
    // console.log(list);
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('b');
    expect(list.head.next.next.data).toEqual('d');
    expect(list.head.next.next.next.data).toEqual('c');
    expect(list.head.next.next.next.next).toBeNull();
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');
    list.insertAfter('c', 'd');
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('b');
    expect(list.head.next.next.data).toEqual('c');
    expect(list.head.next.next.next.data).toEqual('d');
    expect(list.head.next.next.next.next).toBeNull();
  });
});
