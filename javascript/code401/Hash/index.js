'use strict';

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
    // console.log(data);
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

module.exports = HashTable;
