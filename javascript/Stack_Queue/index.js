'use strict';

class Node2 {
// * Example of a linear queue
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// push2(value){
//   let newNode2 = new Node2(value);
//   newNode2.next = this.top;
//   this.top = newNode2;
// }


class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(value){
    this.top = new Node(value, this.top);
  }

  pop(){
    if(!this.top) return null;

    let removedItem = null;

    removedItem = this.top.value;
    this.top = this.top.next;

    return removedItem;
  }

  peek(){
    return this.top.value;
  }

  isEmpty(){
    return this.top ? true : false;
  }
}

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}


class Queue {

  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue2(value){

    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }

    this.back = newNode;

    // we move the back pointer to the new node
  }

  // enqueue(value){
  //   let newNode = new Node2(value);
  //   if(this.front){
  //     this.back.next = new Node(value, this.back);
  //   }

  //   // we move the back pointer to the new node
  //   this.back = new Node();

  //   this.front ? this.back.next = new Node(value, this.front)
  // }

  dequeue(){
    let removedItem = null;
    if(this.front){
      removedItem = this.front.value;
      // if there was only one node in the queue, we need to make back null
      if (this.front === this.back){
        this.back = null;
      }

      // works if list if empty or populated, will either be null, or "next in line"
      this.front = this.front.next;
    }
    return removedItem;
  }

  peek(){
    return this.top.value;
  }

  isEmpty(){
    return this.top ? true : false;
  }
}

module.exports = { Node, Stack, Queue };
