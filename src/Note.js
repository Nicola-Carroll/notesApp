class Note {
  constructor(content) {
    this.content = content;
  }

  emojiStrings() {
    const words = this.content.split(/[^:\w]/);
    return words.filter((word) => this._isEmoji(word));
  }

  create() {
    // returns the content of note but with emojis unicodes
  }

  _isEmoji(string) {
    return /^:.*:$/.test(string);
  }
}
