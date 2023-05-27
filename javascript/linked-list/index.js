'use strict';

class Node {
  //Think of Node as the box itself. It's content and handling instruction are required at a minimum. Additional properties could be added.
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //Think of LinkedList supply chain. The List can be equipped with additional methods to execute its purposes.
  constructor(){
    this.head = null; // set to null by default
    this.size = 0;
  }

  // * This are different methods for the Linked list
  // insert first node
  insertFirst(data) {
    // * Below creates the new node by adding the data and assigning the next head with the current head (which is null when inserting the first {100} -> null)
    this.head = new Node(data, this.head);
    this.size++;
  }
<<<<<<< HEAD

  // TODO: insert function

  insertByCisco(data){
    this.head = new Node(data, this.head);
  }

  // TODO: includes

  includesInList(data){
    let current = this.head;
    while(current){
      if(current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // TODO: to string
  // print list data
  printListData() {
    let current = this.head;
    const dataList = [];
    while (current) {
      dataList.push(`{ ${current.data} }`);
      current = current.next;
    }
    dataList.push('NULL');
    return dataList.join(' -> ');
  }

  // TODO: append
  append(value){
    let current = this.head;
    // console.log(current);
    if(!current){
      this.head = new Node(value, null);
    } else {
      while(current){
        if(current.next === null){
          current.next = new Node(value, null);
          this.size++;
          return;
        }
        current = current.next;
      }
    }
    this.size++;
  }

  appendChatGPT(value) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  //TODO: insertAfter
  insertAfter(targetValue, value){
    let current = this.head;
    // console.log(current);
    while(current){
      if(current.data === targetValue){
        current.next = new Node(value, current.next);
      }
      current = current.next;
    }
  }

  //TODO: insertBefore
  insertBefore(targetValue, value){
    let current = this.head;
    if(this.head.data === targetValue){
      this.head = new Node(value, this.head);
      return;
    }
    while(current.next){
      if(current.next.data === targetValue){
        current.next = new Node(value, current.next);
        return;
      }
      current = current.next;
    }
  }


=======
>>>>>>> main
  // insert last node
  insertLast(data){
    let node = new Node(data);
    let current;

    // If empty, make head
    if(!this.head){
      this.head = node;
    } else {

      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }
  // insert at index
  insertAt(data, index){

    // If index is out of range
    if(index > 0 && index > this.size){
      return;
    }

    // if first index
    if(index === 0){
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set curernt to first
    current = this.head;
    let count = 0;

    while(count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;

  }
  // get at index
  getAt(index){
    let current = this.head;
    let count = 0;

    while(current){
      if(count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }
  // remove at index
  removeAt(index){
    if( index> 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if(index === 0){
      this.head = current.next;
    } else {
      while( count < index ){
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
<<<<<<< HEAD
=======
  // print list data
  printListData() {
    let current = this.head;

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
>>>>>>> main
}

const zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  const newList = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      newList.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      newList.append(current2.value);
      current2 = current2.next;
    }
  }
  return newList;
};

<<<<<<< HEAD
// const ll = new SinglyLinkedList();
// ll.append(2);
// ll.append(1);
// ll.insertAfter(3, 1);
// ll.insertBefore(4, 3);
// console.log(ll);
// console.log(ll.printListData());
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// console.log(ll.includesInList(100));
// console.log(ll.printListData());
// ll.insertAt(500, 2);

// ll.removeAt(2);
// console.log(ll);

// ll.printListData();

// const reverseLinkedList = (inputList) => {

//   const reverseList = new LinkedList();

//   while(inputList.head){
//     let node = new Node(inputList.value)
//     reverseList.insertFirst(inputList.value);

//     inputList.current = inputList.current.next;

//   }

//   return reverseList;

// };



module.exports = {
  Node,
  SinglyLinkedList,
  zipLists,
};
=======
module.exports = { LinkedList, zipLists };
>>>>>>> main
