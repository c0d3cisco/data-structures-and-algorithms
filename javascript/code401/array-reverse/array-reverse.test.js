'use strict';

const reverseArray = (arr) => {

  const arrNew = [];

  for( let i = 0; i < arr.length; i++){
    arrNew[arr.length - 1 - i] = arr[i];
  }
  console.log(arrNew);
  return arrNew;
};


describe('Test for array-reverse', () => {

  let array = [89, 2354, 3546, 23, 10, -923, 823, -12];
  let arrayEmpty = [];
  let arrayDataType = [ 'test', {test: 'test'}, 3, [3,4]];

  test('This tests "Happy Path", expected failure (an empty array), ', () => {
    expect(reverseArray(array)).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
    expect(reverseArray(arrayEmpty)).toEqual([]);
    expect(reverseArray(arrayDataType)).toEqual([ [3,4], 3, {test: 'test'}, 'test']);

  });

});
