class Note {
  constructor(content) {
    this.content = content;
  }
  emojify() {
    let word = this.content.split(" ");
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] == /^:.*:$/g) {
        console.log(word[i]);
      }
    }
  }
  anything(string) {
    return string == /[:\w+:]/g;
  }
}
