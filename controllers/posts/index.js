const express = require('express');
const router = express.Router();
const path = require('path');

const Posts = require('../../models/posts.js');

router.get("/", (req, res) => {
  res.render(path.join(__dirname + '/../../views/posts/index.ejs'))
});

// index controller
router.get("/", (req, res) => {
  Posts.findAll()
  .then((posts) => {
    res.render(path.join(__dirname + '/../../views/posts/index.ejs'), {
      posts: posts
    });
  })
  .catch(console.error);
});

// show or get controller
router.get("/:postId", (req, res) => {
  Posts.find(req.params.postId)
  .then((post) => {
      // get comments attached to post
      Comments.findAll(req.params.postId)
      .then((comments) => {
        res.render(path.join(__dirname + '/../../views/posts/index.ejs'), {
          post: post[0],
          comments: comments
        });
      });
  }).catch(console.error);
});

// update controller => edit.ejs
router.put('/:postId', () => {});

// delete controller
router.delete('/:postId', () => {});

module.exports = router;
