const note = new Note("Note goes here :smile: :heart:");

const emojiArray = [":smile:", ":heart:"];

expect(note.emojiStrings()).toEqualArray(emojiArray);
