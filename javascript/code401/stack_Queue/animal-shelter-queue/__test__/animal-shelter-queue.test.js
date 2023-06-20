'use strict';

const { AnimalShelter } = require('../index.js');

describe('AnimalShelter', () => {
  let animalShelter;

  beforeEach(() => {
    animalShelter = new AnimalShelter();
  });

  test('enqueue adds an animal to the shelter', () => {
    animalShelter.enqueue('Fluffy', 'cat');
    animalShelter.enqueue('Buddy', 'dog');

    // The front and back should point to the same animal
    expect(animalShelter.front.name).toBe('Fluffy');
    expect(animalShelter.front.species).toBe('cat');
    expect(animalShelter.back.name).toBe('Buddy');
    expect(animalShelter.back.species).toBe('dog');
  });

  test('dequeue returns the preferred animal', () => {
    animalShelter.enqueue('Fluffy', 'cat');
    animalShelter.enqueue('Buddy', 'dog');
    animalShelter.enqueue('Max', 'cat');

    const cat = animalShelter.dequeue('cat');
    const dog = animalShelter.dequeue('dog');
    const invalidPref = animalShelter.dequeue('rabbit');

    // Check if the dequeued animals match the preferred species
    expect(cat.name).toBe('Fluffy');
    expect(cat.species).toBe('cat');
    expect(dog.name).toBe('Buddy');
    expect(dog.species).toBe('dog');

    // If the preferred species is not found, null should be returned
    expect(invalidPref).toBeNull();
  });

  test('remove animal from position other than front', ()=>{
    animalShelter.enqueue('Fluffy', 'cat');
    animalShelter.enqueue('Buddy', 'dog');
    animalShelter.enqueue('Max', 'cat');
    animalShelter.enqueue('Spots', 'dog');

    const dog = animalShelter.dequeue('dog');
    expect(dog.name).toBe('Buddy');

  });

  test('dequeue empty queue', ()=>{

    const dog = animalShelter.dequeue('dog');
    expect(dog).toBe('queue is empty');

  });
});
