class Notebook {

constructor() {
  this.listOfNotes = ['I need to go and buy a football', 'I want to go bowling', 'go and code'];
  //this.truncatedNotes = [];

}

// truncatedNote(note){
//   //we need to split a string element and then display on the first three element of the array
//   this.listOfNotes.push(note) // this is pushing correctly to the array
//   return this.listOfNotes;
// }

truncatedNotes(){
  // dont need the if statement. - dont need the if else statement
  if(this.listOfNotes.length > 20) { // rewrite using the map function and reiterate through each note in the array
    return this.listOfNotes.substring(0, 20)+'...'
  } else if (this.listOfNotes.length === 20 ){ //<=
    return this.listOfNotes.substring(0, 20)+'...'
  } else {
    return listOfNotes;
  }
}
//note.content
 openNotes(){
  console.log('this prints out')
 }

}