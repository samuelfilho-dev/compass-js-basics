function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = []
    this.isLive = false;
}

console.log(new Post('a','b','c'));
