'use strict';

// Setting a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully returns a list of all unique keys that exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value



class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    // split the key into an array of characters
    let characters = key.split('');
    // recursively reduce the array of characters to a single number
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 863;
    // size is set when the hash table is instantiated
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);
    let data = { [key]: value };
    this.buckets[position] = data;
  }

  get(key) {
    let position = this.hash(key);
    return this.buckets[position] ? this.buckets[position][key] : null;
  }

  has(key){
    let position = this.hash(key);
    return this.buckets[position] ? true : false;
  }

  keys(){
    let results = this.buckets.reduce((keysArr, bucket) => {
      if(bucket){
        return [...keysArr, ...Object.keys(bucket)];
      }
    }, []);
    return results;
  }
}

describe('Hash Table', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const table = new HashTable(1024);
    table.set('testKey', 'testValue');
    expect(table.get('testKey')).toEqual('testValue');
  }
  );
  test('Retrieving based on a key returns the value stored', () => {
    const table = new HashTable(1024);
    table.set('testKey', 'testValue');
    expect(table.get('testKey')).toEqual('testValue');
  }
  );
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const table = new HashTable(1024);
    expect(table.get('testKey')).toEqual(null);
  }
  );
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('testKey1', 'testValue1');
    table.set('testKey2', 'testValue2');
    table.set('testKey3', 'testValue3');
    expect(table.keys()).toEqual(['testKey', 'testKey2', 'testKey3']);
  }
  );
  test('Successfully handle a collision within the hashtable', () => {
    const table = new HashTable(1024);
    table.set('testKey', 'testValue');
    table.set('testKey', 'testValue2');
    expect(table.get('testKey')).toEqual('testValue2');
  }
  );
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new HashTable(1024);
    table.set('testKey', 'testValue');
    table.set('testKey', 'testValue2');
    expect(table.get('testKey')).toEqual('testValue2');
  }
  );
  test('Successfully hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    table.set('testKey', 'testValue');
    table.set('testKey', 'testValue2');
    expect(table.get('testKey')).toEqual('testValue2');
  }
  );
}
);
