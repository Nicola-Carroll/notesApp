const notebook = new Notebook([
  new Note("hello!"),
  new Note("this is a test!"),
]);

expect(notebook.openNotes(0).content).toEqual("hello!");

const newNote = new Note("mock note");

notebook.addNote(newNote);

expect(notebook.openNotes(2)).toEqual(newNote);

const deleteNote = new Note("delete this note");

notebook.deleteNote(3);

expect(notebook.listOfNotes).toNotInclude(deleteNote);

const reallyLongNote = new Note("loooooooooooooooooooooooong");

notebook.addNote(reallyLongNote);

expect(notebook.truncatedNotes()).toInclude("looooooooooooooooooo...");
