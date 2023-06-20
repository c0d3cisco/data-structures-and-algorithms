# Insertion Sort Pseudocode Start

## Problem Domain

Use the pseudocode provided to further understand visualization of code mechanics.

```
Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted
```

## Whiteboard Process

![insertionSort](../.../../../../assets/insertionSort_codeChallenge26.png)

## Approach & Efficiency

BigO Time - O(n^2). This is because the operation is composed of two functions, each can take O(n) time, thus O(n * n) => O(n^2)\
BigO Space - O(1) since the size of the input and output does not change.

## Solution

git clone this repository into a desired location.\
Inside the repository, run `npm install`.\
Navigate to the JavaScript folder and run `npm test animal-shelter-queue.test.js`

[insertionSort.test.test.js](./insertionSort.test.js)
