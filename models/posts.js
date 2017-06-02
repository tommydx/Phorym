const db = require("../config/database");

let Posts = {};

Posts.findAll = () => {
  return db.manyOrNone("SELECT * FROM posts");
}

Posts.find = (postId) => {
  return db.manyOrNone(`SELECT * FROM posts WHERE post.id = $1`, [postId]);
}

Posts.findByName = (postTitle) => {
  return db.manyOrNone(`SELECT title FROM posts WHERE post.title = $1`, [postTitle]);
}

module.exports = Posts;
