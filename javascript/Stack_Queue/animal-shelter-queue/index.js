'use strict';

class AnimalNode {
  constructor(name, species){
    this.name = name;
    this.species = species;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(name, species) {
    let newAnimal = new AnimalNode(name, species, null);
    if(!this.front){
      this.front = newAnimal;
      this.back = newAnimal;
    } else {
      this.back.next = newAnimal;
      this.back = newAnimal;
    }
  }
  dequeue(pref) {
    if(!this.front) return 'queue is empty';
    let current = this.front;
    while(current) {
      if(this.front.species === pref){
        this.front = this.front.next;
        current.next = null;
        return current;
      } else if(current.next?.species === pref){
        let temp = current.next;
        current.next = current.next.next;
        temp.next = null;
        return temp;
      } else {
        current = current.next;
      }
    }
    return null;
  }
}

module.exports = { AnimalShelter };



// const queueShelter = new AnimalShelter();
// // console.log(queueShelter);
// console.log(queueShelter.dequeue());
// queueShelter.enqueue('sparky', 'dog');
// // console.log(queueShelter);
// queueShelter.enqueue('Miss Sunshine', 'cat');
// queueShelter.enqueue('Other cat', 'cat');
// queueShelter.enqueue('Boxer1', 'dog');
// queueShelter.enqueue('Boxer2', 'dog');
// // console.log(queueShelter);
// console.log(queueShelter.dequeue('dog'));
// console.log(queueShelter);
