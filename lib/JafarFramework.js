function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual === expected) {
        console.log("The power, the absolute power");
      } else {
        console.log(`expected ${actual} to equal ${expected} - FAIL :()`);
      }
    },

    toInclude: function (expected) {
      if (Array.prototype.includes.call(actual, expected)) {
        console.log("The power, the absolute power");
      } else {
        console.log(
          `expected ${expected} to be within ${actual} but it is not - FAIL :()`
        );
      }
    },

    toNotInclude: function (expected) {
      if (Array.prototype.includes.call(actual, expected)) {
        console.log(
          `expected ${expected} to not be within ${actual} - FAIL :()`
        );
      } else {
        console.log("The power, the absolute power");
      }
    },

    toEqualArray: function (expected) {
      if (arrayEquals(expected, actual)) {
        console.log("The power, the absolute power");
      } else {
        console.log(`expected ${actual} to equal ${expected} - FAIL :()`);
      }
    },
  };
}
