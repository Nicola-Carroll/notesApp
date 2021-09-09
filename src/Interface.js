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

  const saveNote = (i) => {
    document.querySelector('#edit').addEventListener('click', () => {
      notebook.listOfNotes[i].content = document.querySelector('#notepad').value;
      notebook.listOfNotes[i].createWithEmojis();
    })
  
  }

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
      
      saveNote(i)
    });
  };

  for (let i = 0; i < notebook.listOfNotes.length; i++) {
    addEditNoteEvent(i);
  }
// addEventListener followed by click and function is telling the Dom I want whatever is in the function to happen when I click the save button
//querySelector is identifying that the thing of interest is the edit button (shown by its Id)

});


