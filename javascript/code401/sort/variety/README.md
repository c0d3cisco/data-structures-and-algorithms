# Sort Variety

## Problem Domain

To sort an array of objects by a property of the object, we need to write a function that takes an array and a callback function. The callback function will be used to compare two elements of the array. The callback function will return a number. If the number is positive, the first element is greater than the second element. If the number is negative, the first element is less than the second element. If the number is zero, the elements are equal.

## Whiteboard Process

There was no whiteboard process for this code challenge.

## Approach & Efficiency

Big O Time - O(n^2). This is because the operation is composed of two functions, each can take O(n) time, thus O(n * n) => O(n^2)\
Big O Space - O(1) since the size of the input and output does not change.

## Solution

[sort.test.js](./sort.test.js)
