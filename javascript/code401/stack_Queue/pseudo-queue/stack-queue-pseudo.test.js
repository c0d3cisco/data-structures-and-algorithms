'use strict';

const { PseudoQueue } = require('../index');


describe('PseudoQueue', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    console.log(queue);
    expect(queue.s1.top.value).toEqual(1);
    expect(queue.s1.top.next).toBeNull();
  });

  test('Can add to pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    expect(pseudoQueue.s1.top.value).toEqual(1);
  });

  test('Can add multiple values to pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.s1.top.value).toEqual(1);
    expect(pseudoQueue.s1.top.next.value).toEqual(2);
    expect(pseudoQueue.s1.top.next.next.value).toEqual(3);
  });

  test('New values always go to back of pseudoQueue', () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.s1.top.value).toEqual(1);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.s1.top.next.value).toEqual(2);
    expect(pseudoQueue.s1.top.next.next.value).toEqual(3);
  });

  test('Dequeue the value that was first added', () => {
    let pseudoQueue = new PseudoQueue();
    expect(pseudoQueue.dequeue()).toEqual('Queue is empty');
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.dequeue()).toEqual(1);
    expect(pseudoQueue.dequeue()).toEqual(2);
  });

  test('Multiple Dequeues work', () => {
    let pseudoQueue = new PseudoQueue();
    expect(pseudoQueue.dequeue()).toEqual('Queue is empty');
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.dequeue()).toEqual(1);
    expect(pseudoQueue.dequeue()).toEqual(2);
    expect(pseudoQueue.dequeue()).toEqual('Queue is empty');
  });
});
