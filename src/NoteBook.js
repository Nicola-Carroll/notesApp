class Notebook {
  constructor() {
    this.listOfNotes = [];
  }
  truncatedNotes() {
    return this.listOfNotes.map((element) => {
      if (element.content.length > 20) {
        return `${element.content.substring(0, 20)}...`;
      } else {
        return element.content;
      }
    });
  }
  openNotes(indexForNote) {
    return this.listOfNotes[indexForNote];
  }
  addNote(note) {
   note.createWithEmojis();
   note.content
    this.listOfNotes.push(note);
  }
}
