const button = document.getElementById("button");

button.addEventListener("click", function () {
  text = document.getElementById("textinput").value;
  note = new Note(text);
  note.createWithEmojis().content;
  console.log(addNote(note));
});
//