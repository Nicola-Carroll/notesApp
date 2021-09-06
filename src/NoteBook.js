class Notebook {

constructor() {
this.listOfNotes = ['test_me_baby'];
this.truncatedNotes = [];

}

truncatedNote(note){
  //we need to split a string element and then display on the first three element of the array
 this.listOfNotes.push(note) // this is pushing correctly to the array
  return this.listOfNotes;
}
 openNotes(){
  console.log('this prints out')
 }

}