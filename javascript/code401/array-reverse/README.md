# Code Challenge 1 - Return a reversed array

This code challenge required for a function called *reverseArray* that takes in an array and returns an array in the reversed order without using any built in methods available in JavaScript.

## Whiteboard Process

![Whiteboard for this code challenge](/assets/reverse-array_code-challenge-1.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Since the size of the length is known, a for loop was picked.

**BigO**

Time: O(n)\
Space: O(1)

## Solution
<!-- Show how to run your code, and examples of it in action -->

git clone this repository into a desired location.\
Inside the repository, run `npm install`.\
Navigate to the JavaScript folder and run `npm test array-reverse`

[array-reverse.test.js](/javascript/code401/array-reverse/array-reverse.test.js)

OR

The code below can be copied and execute it - change any of the array if desired.


    // Edit three variables for testing
    let array = [89, 2354, 3546, 23, 10, -923, 823, -12];
    let arrayEmpty = [];
    let arrayDataType = [ 'test', {test: 'test'}, 3, [3,4]];

    const reverseArray = (arr) => {

      const arrNew = [];

      for( let i = 0; i < arr.length; i++){
        arrNew[arr.length - 1 - i] = arr[i];
      }
      console.log(arrNew)
      return arrNew;
    }

    reverseArray(array);
    reverseArray(arrayEmpty);
    reverseArray(arrayDataType);

![Example of code run](/assets/reverse-array_code-challenge-1_example.png)

