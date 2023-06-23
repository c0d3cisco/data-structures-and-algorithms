'use strict';

function mergeSort(arr){
  let n = arr.length;
  if(n > 1){

    let mid = n/2;
    mid = Math.ceil(mid);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

describe('Merge Sort', () => {
  test('It should sort an array - odd number array', () => {
    let arr = [5,7,2];
    mergeSort(arr);
    expect(arr).toEqual([2,5,7]);
  });

  test('It should sort an array - even number array', () => {
    let arr = [8,4,23,42,16,15];
    mergeSort(arr);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });

  test('It should sort an array - reserve order', () => {
    let arr = [20,18,12,8,5,-2];
    mergeSort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });

  test('test with empty array', () => {
    let arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });

});

