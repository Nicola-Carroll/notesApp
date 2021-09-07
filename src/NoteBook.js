class Notebook {

  constructor(listOfNotes) {
    this.listOfNotes = ['I need to go and buy a football', 'I want to go bowling', 'go and code'];
  
  }

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
openNotes(Index){
  //console.log('this prints out')
  return this.listOfNotes[Index];
 }

}
