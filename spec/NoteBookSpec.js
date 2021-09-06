function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual === expected){
        console.log(".")
      } else {
        console.log(`expected ${actual} to equal ${expected}, but it does not`)
      }
    }
  }
}
note = new Notebook;
expect(sum(1,2)).toEqual(3);
expect(note.listOfNotes).toEqual()
expect(items[0].id).to eql(1)