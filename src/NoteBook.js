class Notebook {
  constructor(listOfNotes = []) {
    this.listOfNotes = listOfNotes;
  }
  truncatedNotes() {
    return this.listOfNotes.map((note) => {
      if (note.content.length > 20) {
        return `${note.content.substring(0, 20)}...`;
      } else {
        return note.content;
      }
    });
  }
  openNotes(indexForNote) {
    return this.listOfNotes[indexForNote];
  }
  addNote(note) {
    note.createWithEmojis();
    this.listOfNotes.push(note);
  }

  deleteNote(index) {
    this.listOfNotes.splice(index, 1);
  }
}
