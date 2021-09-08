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

  const truncatedNotes = notebook.truncatedNotes();

  const createNoteLinkElement = (note) => {
    const noteButton = document.createElement("input");
    const noteIndex = notebook.listOfNotes.indexOf(note);
    noteButton.setAttribute("id", `linkToNote${noteIndex}`);
    
    noteButton.setAttribute("value", truncatedNotes[noteIndex]);
    noteButton.setAttribute("type", "button");
    return noteButton;
  };



  const updateNoteLinks = () => {
    notebook.listOfNotes.forEach((note) => {
      const noteLink = createNoteLinkElement(note);
      document
        .querySelector("#listOfNotes")
        .appendChild(noteLink)
        .appendChild(document.createElement("br"));
    });
  };

  updateNoteLinks();

  document.querySelector("#linkToNote1").addEventListener("click", () => {
    // happen for all of the links (nice code)
    //edit button to edit 2nd  index

    // const expandedNote1 = document.createElement("p")
    // expandedNote1.innerText = shoppingList.content
    document.querySelector("#notepad").value = shoppingList.content
    const editButton = document.createElement("input")
    editButton.setAttribute("id", "edit")
    editButton.setAttribute("type", "button")
    editButton.setAttribute("value", "save")
    document
      .querySelector("#mainButtons")
      .appendChild(editButton)
      .appendChild(document.createElement("br"));

    document.querySelector('#buttonTest').disabled = true //This disables the create button
      
    
  })

});
