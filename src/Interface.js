document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();

  if (JSON.parse(localStorage.getItem("listOfNotes"))) {
    JSON.parse(localStorage.getItem("listOfNotes")).forEach((note) => {
      const newNote = new Note(note.content);
      notebook.addNote(newNote);
    });
  }

  const currentLocalStorage = () => {
    console.log(notebook.listOfNotes);

    localStorage.setItem("listOfNotes", JSON.stringify(notebook.listOfNotes));
    localStorage.setItem(
      "truncatedList",
      JSON.stringify(notebook.truncatedNotes())
    );

    return {
      localList: JSON.parse(localStorage.getItem("listOfNotes")),
      truncatedList: JSON.parse(localStorage.getItem("truncatedList")),
    };
  };

  document.getElementById("create").addEventListener("click", function () {
    const note = new Note(document.getElementById("notepad").value);
    notebook.addNote(note);
    currentLocalStorage();

    note.createWithEmojis();

    console.log(note.content);

    updateNoteLinks();
    document.getElementById("notepad").value = "";
  });

  const addEditOrDeleteNoteEventSingular = (i) => {
    document.querySelector(`#linkToNote${i}`).addEventListener("click", () => {
      document.querySelector("#create").disabled = true; //This disables the create button
      document.querySelector("#edit").disabled = false;
      document.querySelector("#delete").disabled = false;

      sessionStorage.setItem("currentNote", i);

      document.querySelector("#notepad").value =
        currentLocalStorage().localList[i].content;
    });
  };

  const addEditOrDeleteNoteEventAll = () => {
    currentStorage = currentLocalStorage().localList;
    for (let i = 0; i < currentStorage.length; i++) {
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

  const createNoteLinkElement = (i) => {
    const noteButton = document.createElement("input");

    noteButton.setAttribute("id", `linkToNote${i}`);
    noteButton.setAttribute("class", "button");
    noteButton.setAttribute("value", currentLocalStorage().truncatedList[i]);
    noteButton.setAttribute("type", "button");
    return noteButton;
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const updateNoteLinks = () => {
    list = document.querySelector("#listOfNotes");
    currentStorage = currentLocalStorage().localList;
    removeAllChildNodes(list);
    for (i = 0; i < currentStorage.length; i++) {
      // we want to replace the existing element for that note with a new one
      const newNoteLink = createNoteLinkElement(i);
      document.querySelector("#listOfNotes").appendChild(newNoteLink);
    }
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

  updateNoteLinks();

  addEditOrDeleteNoteEventAll();
});
