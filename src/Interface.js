document.addEventListener("DOMContentLoaded", () => {
  const notebook = new Notebook();

  const button = document.getElementById("create");
  button.addEventListener("click", function () {
    const note = new Note(document.getElementById("notepad").value);
    notebook.addNote(note);
    console.log(notebook.listOfNotes);
    const noteButton = document.createElement("input");
    const listOfNotes = document.getElementById("listOfNotes");
    noteButton.innerHTML = "" + note.content + "";
    listOfNotes.appendChild(noteButton);
    const noteIndex = notebook.listOfNotes.indexOf(note);
    noteButton.setAttribute("id", `linkToNote${noteIndex}`);
    noteButton.setAttribute("class", "button");
    noteButton.setAttribute("value", notebook.truncatedNotes()[noteIndex]);
    noteButton.setAttribute("type", "button");
    return noteButton;
  });

  // console.log(notebook.listOfNotes);
  // console.log(notebook.truncatedNotes());

  const createNoteLinkElement = (note) => {
    // const noteButton = document.createElement("input");
    // noteIndex = notebook.listOfNotes.indexOf(note);
    // noteButton.setAttribute("id", `linkToNote${noteIndex}`);
    // noteButton.setAttribute("class", "button");
    // noteButton.setAttribute("value", notebook.truncatedNotes()[noteIndex]);
    // noteButton.setAttribute("type", "button");
    // return noteButton;
  };

  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteLink = createNoteLinkElement(note);
      document.querySelector("#listOfNotes").appendChild(noteLink);
      document
        .querySelector("#listOfNotes")
        .appendChild(document.createElement("br"));
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

  updateNoteLinks();

  const addEditNoteEvent = (i) => {
    document.querySelector(`#linkToNote${i}`).addEventListener("click", () => {
      //edit button to edit 2nd  index

      document.querySelector("#notepad").value =
        notebook.listOfNotes[i].content;

      // this prevents the "edit" button from being added multiple times after multiple clicks
      if (!document.querySelector("#edit")) {
        createEditButton();
      }

      document.querySelector("#buttonTest").disabled = true; //This disables the create button
    });
  };

  for (let i = 0; i < notebook.listOfNotes.length; i++) {
    addEditNoteEvent(i);
  }
});
