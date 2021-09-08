const button = document.getElementById("button");

button.addEventListener("click", function () {
  text = document.getElementById("textinput").value;
  note = new Note(text);
  notebook = new Notebook();
  note.createWithEmojis().content;
  notebook.addNote(note);
  console.log(notebook.addNote(note));
});
