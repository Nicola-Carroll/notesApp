document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();

  const button = document.getElementById("create");

  button.addEventListener("click", function () {
    const note = new Note(document.getElementById("notepad").value);
    notebook.addNote(note);

    updateNoteLinks();
    document.getElementById("notepad").value = "";
  });

  const createNoteLinkElement = (note) => {
    i = notebook.listOfNotes.indexOf(note);
    truncatedList = notebook.truncatedNotes();

    const noteButton = document.createElement("input");

    noteButton.setAttribute("id", `linkToNote${i}`);
    noteButton.setAttribute("class", "button");
    noteButton.setAttribute("value", truncatedList[i]);
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

  const addEditOrDeleteNoteEventSingular = (i) => {
    document.querySelector(`#linkToNote${i}`).addEventListener("click", () => {
      document.querySelector("#create").disabled = true; //This disables the create button
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
    document.querySelector("#create").disabled = false;
    document.querySelector("#edit").disabled = true;
    document.querySelector("#delete").disabled = true;
  };
  createNoteLinks();

  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteIndex = notebook.listOfNotes.indexOf(note);
      // we want to replace the existing element for that note with a new one
      const oldNoteLink = document.querySelector(`#linkToNote${noteIndex}`);
      const newNoteLink = createNoteLinkElement(note);

      oldNoteLink.replaceWith(newNoteLink);
    });
  };

  const createEditButton = () => {
    const editButton = document.createElement("input");
    editButton.setAttribute("id", "edit");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("class", "button");
    editButton.setAttribute("value", "Save note");
    document
      .querySelector("#mainButtons")
      .appendChild(editButton)
      .appendChild(document.createElement("br"));
  };

  const saveNote = (i) => {
    document.querySelector("#edit").addEventListener("click", () => {
      notebook.listOfNotes[i].content =
        document.querySelector("#notepad").value;
      notebook.listOfNotes[i].createWithEmojis();
      console.log(notebook.truncatedNotes());
      updateNoteLinks();
    });
  };

  // <!-- <input id='delete' value="Delete note" type="button"  class="button"/> -->

  addEditOrDeleteNoteEventAll();

  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteIndex = notebook.listOfNotes.indexOf(note);
      // we want to replace the existing element for that note with a new one
      const oldNoteLink = document.querySelector(`#linkToNote${noteIndex}`);
      const newNoteLink = createNoteLinkElement(note);

      if (oldNoteLink) {
        oldNoteLink.replaceWith(newNoteLink);
      } else {
        document.querySelector("#listOfNotes").appendChild(newNoteLink);
        document
          .querySelector("#listOfNotes")
          .appendChild(document.createElement("br"));
      }
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

  for (let i = 0; i < notebook.listOfNotes.length; i++) {
    addEditNoteEvent(i);
  }
  // addEventListener followed by click and function is telling the Dom I want whatever is in the function to happen when I click the save button
  //querySelector is identifying that the thing of interest is the edit button (shown by its Id)
});
