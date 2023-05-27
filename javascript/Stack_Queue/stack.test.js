// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception

'use strict';

const { Stack } = require('./index');
console.log(Stack);

describe('Stack', () => {
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(3);
    expect(stack.top.next.next.next).toBeNull();
  });
});
