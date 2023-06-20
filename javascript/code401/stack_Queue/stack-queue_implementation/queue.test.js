// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception

'use strict';

const { Queue } = require('../index');

describe('Queue', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    // console.log(queue);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    // console.log(queue);
    expect(queue.front.value).toEqual(5);
    expect(queue.front.next.value).toEqual(4);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next.value).toEqual(2);
    expect(queue.front.next.next.next.next.value).toEqual(1);
    expect(queue.front.next.next.next.next.next).toBeNull();
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toBeNull();
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);


    console.log(queue.front.value);
    expect(queue.peek()).toEqual(3);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toBeNull();
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toBeNull();
  });

  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();

    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
  });
});
