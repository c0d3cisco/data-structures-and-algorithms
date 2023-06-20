'use strict';

function insert(sort, value){
  let i = 0;
  while(value > sort[i]){
    i++;
  }
  while(i < sort.length){
    let temp = sort[i];
    sort[i] = value;
    value = temp;
    i++;
  }
  sort.push(value);
}


function insertionSort(input){
  let sorted = [];
  sorted[0] = input[0];

  for(let i = 1; i < input.length; i++){
    insert(sorted, input[i]);
  }
  return sorted;
}


describe('Insertion test', () => {

  it('all tests', () => {

    expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
    expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
    expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
    expect(insertionSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);

  });

});
