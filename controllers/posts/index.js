const express = require('express');
const router = express.Router();
const path = require('path');

const Posts = require('../../models/houses');

router.get("/", (req, res) => {
  res.render(path.join(__dirname + '/../views/posts/index.ejs'))
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
  posts.find(req.params.postId)
  .then((post) => {
      // get students that belong to that house
      Comments.findByPost(req.params.postId)
      .then((comments) => {
        res.render(path.join(__dirname + '/../../views/posts/show.ejs'), {
          post: post[0],
          comments: comments
        });
      });
  }).catch(console.error);
})

// update controller => edit.ejs
router.put('/:postId', () => {})

// delete controller
router.delete('/:postId', () => {})

module.exports = router;
