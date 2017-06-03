const db = require("../config/database");

let Posts = {};
let Comments = {};

Posts.findAll = () => {
  return db.manyOrNone(`SELECT * FROM posts`);
}

Posts.find = (postId) => {
  return db.manyOrNone(`SELECT * FROM posts WHERE post.id = $1`, [postId]);
}

Posts.findByName = (postTitle) => {
  return db.manyOrNone(`SELECT title FROM posts WHERE post.title = $1`, [postTitle]);
}

Comments.findAll = (commentId) => {
  return db.manyOrNone(`SELECT * FROM comments INNER JOIN posts ON comment.id = post.id`, [commentId]);
}

module.exports = Posts;
