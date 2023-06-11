// Input	|| Output
// {}	|| TRUE
// {}(){}	|| TRUE
// ()[[Extra Characters]]	|| TRUE
// (){}[[]]	|| TRUE
// {}{Code}[Fellows](())	|| TRUE
// [({}] ||	FALSE
// (]( ||	FALSE
// {(})	|| FALSE
// Consider these small examples and why they fail.

// Input || Output ||	Why
// {	|| FALSE ||	error unmatched opening { remaining.
// ) ||	FALSE ||	error closing ) arrived without corresponding opening.
// [} ||	FALSE	|| error closing }. Doesn’t match opening (.

'use strict';

const { validateBrackets } = require('../index.js');

describe('validateBrackets', () => {
  test('should return true if the brackets are balanced', () => {
    expect(validateBrackets('{}')).toBeTruthy();
    expect(validateBrackets('{}(){}')).toBeTruthy();
    expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
    expect(validateBrackets('(){}[[]]')).toBeTruthy();
    expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy();
  });

  test('should return false if the brackets are not balanced', () => {
    expect(validateBrackets('[({}]')).toBeFalsy();
    expect(validateBrackets('(](')).toBeFalsy();
    expect(validateBrackets('{(})')).toBeFalsy();
    expect(validateBrackets('}{(})')).toBeFalsy();
  });

  test(' test empty string returns true', () => {
    expect(validateBrackets('')).toBeTruthy();
  });
});
