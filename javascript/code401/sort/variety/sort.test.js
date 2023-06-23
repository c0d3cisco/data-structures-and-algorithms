'use strict';

const { Movies } = require('./movies');
const {sortYear, compareYear, sortTitle, compareTitle} = require('./sort');


describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });
});

describe('Comparators', () => {
  test('can compare movies by year', () => {
    // Movies[0] is from 1988, Movies[1] is from 1984
    expect(compareYear(Movies[0], Movies[1])).toBeGreaterThan(0);
    expect(compareYear(Movies[1], Movies[0])).toBeLessThan(0);
    expect(compareYear(Movies[0], Movies[0])).toEqual(0);
  });

  test('can compare movies by title', () => {
    // Movies[0] is "Beetlejuice", Movies[1] is "The Cotton Club"
    expect(compareTitle(Movies[1], Movies[0])).toBeGreaterThan(0);
    expect(compareTitle(Movies[0], Movies[1])).toBeLessThan(0);
    expect(compareTitle(Movies[0], Movies[0])).toEqual(0);
  });
});
