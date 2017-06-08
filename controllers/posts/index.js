const express = require('express');
const router = express.Router();
const path = require('path');

const Posts = require('../../models/posts');


// index controller
router.get("/", (req, res) => {
  console.log(req.url)
  Posts.findAll()
  .then((postsdata) => {
    console.log(postsdata);
    res.render(path.join(__dirname + '/../../views/posts/index.ejs'), {
      posts: postsdata
    });
  })
  .catch(console.error);
});

// show or get controller
router.get("/posts/:postId", (req, res) => {
  Posts.find(req.params.postId)
  .then((postdata) => {
    console.log(postdata);
    res.render('posts/show.ejs', {
      post: postdata
    });
  }).catch(console.error);
});

// // show or get controller
// router.get("/:postId", (req, res) => {
//   Posts.find(req.params.postId)
//   .then((post) => {
//       // get comments attached to post
//       Comments.findAll(req.params.postId)
//       .then((comments) => {
//         res.render(path.join(__dirname + '/../../views/comments/index.ejs'), {
//           post: post[0],
//           comments: comments
//         });
//       });
//   }).catch(console.error);
// });

// update controller => edit.ejs
router.put('/:postId', () => {});

// delete controller
router.delete('/:postId', () => {});

module.exports = router;
