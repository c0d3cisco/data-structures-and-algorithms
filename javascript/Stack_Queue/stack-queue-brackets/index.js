'use strict';

const { Stack } = require('../index.js');

function validateBrackets(input){
  let stack = new Stack();
  let brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i = 0; i < input.length; i++){
    if(input[i] === '(' || input[i] === '[' || input[i] === '{'){
      stack.push(input[i]);
    } else if (input[i] === ')' || input[i] === ']' || input[i] === '}'){
      if(input[i] === brackets[stack.peek()]){
        stack.pop();
      }
    }
  }
  return stack.peek() ? false : true;
}

module.exports = { validateBrackets };


