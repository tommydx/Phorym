const db = require("../config/database");

let Comments = {};

Comments.findAll = (postId) => {
  return db.manyOrNone(`SELECT * FROM comments INNER JOIN posts ON comment.id = post.id`, [postId]);
}
