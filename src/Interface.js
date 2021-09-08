document.addEventListener("DOMContentLoaded", () => {
  const football = new Note("Football is at 5pm today :soccer:");
  const shoppingList = new Note("bananas, beans, nail varnish, apples");
  const watchList = new Note(
    "real housewives, the circle, vampire diaries, the royal wedding :crown:"
  );
  football.createWithEmojis();
  watchList.createWithEmojis();

  const notebook = new Notebook();
  notebook.addNote(football);
  notebook.addNote(shoppingList);
  notebook.addNote(watchList);

  console.log(notebook.listOfNotes);
  console.log(notebook.truncatedNotes());

  truncatedNotes = notebook.truncatedNotes();

  const createNoteLinkElement = (note) => {
    noteHyperlink = document.createElement("a");
    noteIndex = notebook.listOfNotes.indexOf(note);
    noteHyperlink.setAttribute("id", `linkToNote${noteIndex}`);
    noteHyperlink.setAttribute(
      "href",
      "https://www.webfx.com/tools/emoji-cheat-sheet/"
    );
    noteHyperlink.innerText = truncatedNotes[noteIndex];
    return noteHyperlink;
  };

  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      noteLink = createNoteLinkElement(note);
      document
        .querySelector("#listOfNotes")
        .appendChild(noteLink)
        .appendChild(document.createElement("br"));
    });
  };

  updateNoteLinks();
});
