function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual === expected) {
        console.log('Pass :D')
      } else {
        console.log(`expected ${actual} to equal ${expected} - FAIL :()`)
      }
    },

    toEqualArray: function (expected) {
      if (arrayEquals(expected, actual)) {
        console.log('Pass :D')
      } else {
        console.log(`expected ${actual} to equal ${expected} - FAIL :()`)
      }
    }
    
  }
}