'use strict';

const HashTable = require('..');
// Setting a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully returns a list of all unique keys that exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value
describe('Hash Table', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    expect(hashTable.get('Cisco')).toEqual('Developer');
  }
  );
  test('Retrieving based on a key returns the value stored', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    expect(hashTable.get('Cisco')).toEqual('Developer');
  }
  );
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    expect(hashTable.get('Cisco')).toEqual('Developer');
    expect(hashTable.get('Cisco1')).toEqual(null);
  }
  );
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    hashTable.set('Cisco1', 'Developer');
    hashTable.set('Cisco2', 'Developer');
    let keys = hashTable.keys();
    expect(keys).toEqual(['Cisco1', 'Cisco', 'Cisco2']);
  }
  );
  test('Successfully handle a collision within the hashtable', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    hashTable.set('Cisco', 'Full Stack Developer');
    expect(hashTable.get('Cisco')).toEqual('Full Stack Developer');
    expect(hashTable.has('Cisco')).toEqual(true);
    expect(hashTable.has('Cisco1')).toEqual(false);
  }
  );
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hashTable = new HashTable(1024);
    hashTable.set('Cisco', 'Developer');
    hashTable.set('Cisco', 'Full Stack Developer');
    expect(hashTable.get('Cisco')).toEqual('Full Stack Developer');
  }
  );
});
