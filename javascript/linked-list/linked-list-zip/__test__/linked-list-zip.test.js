//zipLists(list1, list2)

//Arg list1: {1} -> {3} -> {2} -> null Arg list2:	{5} -> {9} -> {4} -> null Output:	{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
//Arg list1: {1} -> {3} -> null Arg list2:	{5} -> {9} -> {4} -> null Output:	{1} -> {5} -> {3} -> {9} -> {4} -> null
//Arg list1: {1} -> {3} -> {2} -> null Arg list2:	{5} -> {9} -> null Output:	{1} -> {5} -> {3} -> {9} -> {2} -> null


// Write a function called zip lists
// Arguments: 2 linked lists
// Return: New Linked List, zipped as noted below
// Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
// Try and keep additional space down to O(1)
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

const { SinglyLinkedList, zipLists } = require('../../index.js');

describe('Linked List Zip', () => {
  test('test if lists are null', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    const list3 = zipLists(list1, list2);
    expect(list3.head).toEqual(null);
  });

  test('test if list1 is null', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    list2.insertByCisco('c');
    list2.insertByCisco('b');
    list2.insertByCisco('a');
    console.log(list2);
    const list3 = zipLists(list1, list2);
    console.log(list3);
    expect(list3).toEqual(list2);
  });
  test('test if list2 is null', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    list1.insertByCisco('c');
    list1.insertByCisco('b');
    list1.insertByCisco('a');
    const list3 = zipLists(list1, list2);
    expect(list3).toEqual(list1);
  });
  test('test if lists are the same length', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    list1.insertByCisco('c');
    list1.insertByCisco('b');
    list1.insertByCisco('a');
    list2.insertByCisco('f');
    list2.insertByCisco('e');
    list2.insertByCisco('d');
    const list3 = zipLists(list1, list2);
    expect(list3.printListData()).toEqual('{ a } -> { d } -> { b } -> { e } -> { c } -> { f } -> NULL');
  });
  test('test if list1 is longer than list2', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    list1.insertByCisco('c');
    list1.insertByCisco('b');
    list1.insertByCisco('a');
    list2.insertByCisco('f');
    list2.insertByCisco('e');
    const list3 = zipLists(list1, list2);
    expect(list3.printListData()).toEqual('{ a } -> { e } -> { b } -> { f } -> { c } -> NULL');
  });
  test('test if list2 is longer than list1', () => {
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();
    list1.insertByCisco('c');
    list1.insertByCisco('b');
    list2.insertByCisco('f');
    list2.insertByCisco('e');
    list2.insertByCisco('d');
    const list3 = zipLists(list1, list2);
    expect(list3.printListData()).toEqual('{ b } -> { d } -> { c } -> { e } -> { f } -> NULL');
  });
});
