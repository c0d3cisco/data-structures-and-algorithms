// 'use strict';

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list


'use strict';

const { SinglyLinkedList } = require('../..');

describe('Linked List', () => {
  test('Instantiate an empty linked list', () => {
    const list = new SinglyLinkedList();
    expect(list.head).toBeNull();
  });
  // test below also covers the following: The head property will properly point to the first node in the linked list as the next of the current head is null.'
  test('Can properly insert into the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco(100);
    expect(list.head.data).toEqual(100);
    expect(list.head.next).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco(100);
    expect(list.head.data).toEqual(100);
    expect(list.head.next).toBeNull();
  });

  test('can properly insert multiple nodes into the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco(100);
    list.insertByCisco(200);
    list.insertByCisco(300);
    expect(list.head.data).toEqual(300);
    expect(list.head.next.data).toEqual(200);
    expect(list.head.next.next.data).toEqual(100);
    expect(list.head.next.next.next).toBeNull();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco(200);
    list.insertByCisco(100);

    expect(list.includesInList(100)).toBeTruthy();
    expect(list.includesInList(0)).toBeFalsy();

  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new SinglyLinkedList();
    list.insertByCisco('c');
    list.insertByCisco('b');
    list.insertByCisco('a');

    expect(list.printListData()).toBe('{ a } -> { b } -> { c } -> NULL');
  });
});
