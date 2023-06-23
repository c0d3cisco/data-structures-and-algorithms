'use strict';

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}


function compareYear(a,b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}

function compareTitle(a,b) {
  a = a.title.split(' ');
  b = b.title.split(' ');
  a = ((a[0] === 'The' || a[0] === 'A' || a[0] === 'An') ? a[1] : a[0]).toLowerCase();
  b = ((b[0] === 'The' || b[0] === 'A' || b[0] === 'An') ? b[1] : b[0]).toLowerCase();
  return a.localeCompare(b);
}

module.exports = {sortYear, compareYear, sortTitle, compareTitle};
