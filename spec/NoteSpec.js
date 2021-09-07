const note = new Note("Note goes here :smile:, :heart:!");

note.createWithEmojis();
console.log(note.content);
expect(note.content).toEqual("Note goes here :smile:, :heart:!");
