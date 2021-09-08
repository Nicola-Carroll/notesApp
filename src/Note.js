class Note {
  constructor(content) {
    this.content = content;
  }

  async emojify(string) {
    // connect to the api

    const response = await fetch("https://makers-emojify.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `${string}` }),
    });
    const data = await response.json();
    return data.emojified_text;
  }

  async createWithEmojis() {
    const promises = [];
    this.content.replace(/:[\w]+:/g, (match) => {
      const promise = this.emojify(match);
      promises.push(promise);
    });
    const data = await Promise.all(promises);
    const emojifiedContent = await this.content.replace(/:[\w]+:/g, () =>
      data.shift()
    );
    this.content = emojifiedContent;
  }
}
