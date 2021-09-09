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
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));
  notebook.addNote(new Note("test"));

  storage = window.sessionStorage;

  sessionStorage.setItem("notebook", notebook.listOfNotes);

  console.log(notebook.listOfNotes);
  console.log(notebook.truncatedNotes());

  const createNoteLinkElement = (note) => {
    const noteButton = document.createElement("input");
    const noteIndex = notebook.listOfNotes.indexOf(note);
    noteButton.setAttribute("id", `linkToNote${noteIndex}`);
    noteButton.setAttribute("class", "button");
    noteButton.setAttribute("value", notebook.truncatedNotes()[noteIndex]);
    noteButton.setAttribute("type", "button");
    return noteButton;
  };

  const createNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteLink = createNoteLinkElement(note);
      document.querySelector("#listOfNotes").appendChild(noteLink);
      document
        .querySelector("#listOfNotes")
        .appendChild(document.createElement("br"));
    });
  };

  createNoteLinks();

  const addEditOrDeleteNoteEventSingular = (i) => {
    document.querySelector(`#linkToNote${i}`).addEventListener("click", () => {
      document.querySelector("#buttonTest").disabled = true; //This disables the create button
      document.querySelector("#edit").disabled = false;
      document.querySelector("#delete").disabled = false;

      sessionStorage.setItem("currentNote", i);

      document.querySelector("#notepad").value =
        notebook.listOfNotes[i].content;
    });
  };

  const addEditOrDeleteNoteEventAll = () => {
    for (let i = 0; i < notebook.listOfNotes.length; i++) {
      addEditOrDeleteNoteEventSingular(i);
    }
  };

  const exitEditMode = () => {
    sessionStorage.removeItem("currentNote");
    document.querySelector("#notepad").value = "";
    document.querySelector("#buttonTest").disabled = false;
    document.querySelector("#edit").disabled = true;
    document.querySelector("#delete").disabled = true;
  };

  addEditOrDeleteNoteEventAll();

  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteIndex = notebook.listOfNotes.indexOf(note);
      // we want to replace the existing element for that note with a new one
      const oldNoteLink = document.querySelector(`#linkToNote${noteIndex}`);
      const newNoteLink = createNoteLinkElement(note);

      oldNoteLink.replaceWith(newNoteLink);
    });
    addEditOrDeleteNoteEventAll();
  };

  document.querySelector("#edit").addEventListener("click", () => {
    i = parseInt(sessionStorage.getItem("currentNote"));
    notebook.listOfNotes[i].content = document.querySelector("#notepad").value;
    notebook.listOfNotes[i].createWithEmojis();
    updateNoteLinks();
    exitEditMode();
  });

  document.querySelector("#delete").addEventListener("click", () => {
    i = parseInt(sessionStorage.getItem("currentNote"));
    notebook.deleteNote(i);
    updateNoteLinks();
    exitEditMode();
  });
});
