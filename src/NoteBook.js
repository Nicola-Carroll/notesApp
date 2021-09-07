class Notebook {

  constructor(listOfNotes) {
    this.listOfNotes = ['I need to go and buy a football', 'I want to go bowling', 'go and code'];
  
  }
  // truncatedNote(note){
//   //we need to split a string element and then display on the first three element of the array
//   this.listOfNotes.push(note) // this is pushing correctly to the array
//   return this.listOfNotes;
// }

  truncatedNotes(){
      for (const noteIndex of this.listOfNotes) {
          if(noteIndex.length > 20) { 
              return noteIndex.substring(0, 20)+'...'
      }else if(noteIndex.length <= 20) {
          return noteIndex
      }
      
    }
  }
//note.content
openNotes(){
  console.log('this prints out')
 }

}
