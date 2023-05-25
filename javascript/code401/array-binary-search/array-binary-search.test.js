'use strict';


const binarySearch = (array, num) => {
  let left = 0;
  let right = array.length -1;

  while(left <= right){

    let mid = ((left + right) % 2)
      ? ((left + right) / 2 + 0.5)
      : ((left + right) / 2);

    if(array[mid] < num){
      left = mid + 1;
    } else if(array[mid] > num){
      right = mid -1;
    } else if(array[mid] === num){
      return mid;
    }
  }
  return -1;
};

describe('Test for Binary Search', () => {

  let array = [-131, -82, 0, 27, 42, 68, 179];
  let numCorrect = 0;
  let numWrong = 12;

  test('This tests "Happy Path", expected failure (an empty array), ', () => {
    expect(binarySearch(array, numCorrect)).toEqual(2);
    expect(binarySearch(array, numWrong)).toEqual(-1);

  });

});
