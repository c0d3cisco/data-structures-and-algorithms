// 'use strict';

// class Node2 {
// // * Example of a linear queue
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// push2(value){
//   let newNode2 = new Node2(value);
//   newNode2.next = this.top;
//   this.top = newNode2;
// }


class Stack {
  constructor(){
    this.top = null;
    // this.size = 0;
  }

  push(value){
    this.top = new Node(value, this.top);
    // this.size++;
  }

  pop(){
    if(!this.top) return null;

    let removedItem = null;

    removedItem = this.top.value;
    this.top = this.top.next;
    // this.size--;
    return removedItem;
  }

  peek(){
    return this.top?.value ?  this.top.value : null;
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

  enqueue(value) {
      let newNode = new Node(value);
      // console.log('newNode >>> ', newNode);

      if (!this.front) {
        this.front = newNode;
        this.back = newNode;
      } else {
        // console.log('newNode >>> ', newNode);
        // console.log('this.back >>> ', this.back);
        this.back.next = newNode;
        // console.log('this.back.next = newNode >>> ', this.back);
        this.back = newNode;
        // console.log('this.back = newNode >>> ', this.front);
        // console.log('this.back >>> ', this.back);
        // console.log('this.front >>> ', this.front);

      }
    }


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
    return this.front?.value ? this.front.value : null;
  }

  isEmpty(){
    return this.front?.value ? true : false;
  }
}

class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    while (this.s1.top) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(value);
    while (this.s2.top) {
      this.s1.push(this.s2.pop());
    }
  }

  dequeue() {
    console.log(this.s1);
    if (!this.s1.top) {
      return "Queue is empty";
    }
    return this.s1.pop();
  }
}




module.exports = { Node, Stack, Queue, PseudoQueue };
