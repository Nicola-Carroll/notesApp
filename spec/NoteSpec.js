const note = new Note("Note goes here :smile:, :heart:!");

note.createWithEmojis();
expect(note.content).toEqual("Note goes here :smile:, :heart:!");
