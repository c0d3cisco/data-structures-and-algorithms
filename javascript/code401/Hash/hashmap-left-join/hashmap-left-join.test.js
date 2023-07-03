'use strict';
const HashTable = require('..');




const leftJoin = (hashMapLeft, hashMapRight) => {
  let output = [];
  let leftKeys = hashMapLeft.keys();
  if (leftKeys.length === 0) {
    return output;
  }
  leftKeys.map((keyValue) => {
    let forArray = [];
    forArray.push(keyValue);
    forArray.push(hashMapLeft.get(keyValue));
    hashMapRight.has(keyValue) ?
      forArray.push(hashMapRight.get(keyValue)) :
      forArray.push(null);
    output.push(forArray);
  });
  return output;
};

describe('Hashmap Left Join', () => {

  let hashMapLeft = new HashTable(1024);
  let hashMapRight = new HashTable(1024);

  hashMapLeft.set('fond', 'enamored');
  hashMapLeft.set('wrath', 'anger');
  hashMapLeft.set('diligent', 'employed');
  hashMapLeft.set('outfit', 'garb');
  hashMapLeft.set('guide', 'usher');

  hashMapRight.set('fond', 'averse');
  hashMapRight.set('wrath', 'delight');
  hashMapRight.set('diligent', 'idle');
  hashMapRight.set('guide', 'follow');
  hashMapRight.set('flow', 'jam');

  test('Should return an array of arrays', () => {
    const expected = [
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle']
    ];
    expect(leftJoin(hashMapLeft, hashMapRight)).toEqual(expected);
  });

  test('Should return an empty array if the left hashmap is empty', () => {
    const expected = [];
    expect(leftJoin(new HashTable(1024), hashMapRight)).toEqual(expected);
  });

  test('Should return a lot of nulls if the right hashmap is empty', () => {
    const expected = [
      ['outfit', 'garb', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null]
    ];
    expect(leftJoin(hashMapLeft, new HashTable(1024))).toEqual(expected);
  });
});
