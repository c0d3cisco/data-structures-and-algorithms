# Tree Fizz Buzz

## Problem Domain

The goal of this challenge was to write a function called fizz buzz tree that takes in a k-ary tree and returns a new k-ary. The new tree will instead have “Fizz” if the value of the original tree is divisible by 3, “Buzz” if divisible by 5, “FizzBuzz” if divisible by both 3 and 5,  or return number in string if not divisible by 3 or 5.

## Collaboration

For this code challenge, I collaborated with Justin Mathieu.

## Whiteboard Process

![Tree Whiteboard](../../../../assets/UML_Challenge18.png)

## Approach & Efficiency

The visualization step of whiteboarding was the best approach to tackle this challenge as picturing the queue/dequeue process followed by how the function would then sort through the children nodes was crucial. The Big O time is O(n). Base on how our function works it will have to traverse through the entire tree to check each node. The space complexity is O(1) as the size of the output will always be the same.

## Solution

git clone this repository into a desired location.\
Inside the repository, run `npm install`.\
Navigate to the JavaScript folder.\
Run `npm test tree-fizz-buzz.test.js`

[Tree Fizz Buzz Function](./index.js)

[tree-fizz-buzz.test.js](./__test__/tree-fizz-buzz.test.js)
