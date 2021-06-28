const router = require("express").Router();
const sequelize = require("../config/connections");
const { Post, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");

  res.render("test", { loggedOut: true });
});

// get all posts for homepage
router.get("/login", (req, res) => {
  console.log("======================");

  res.render("login");
});

// get all posts for homepage
router.get("/signup", (req, res) => {
  console.log("======================");

  res.render("signup");
});

// get all posts for logged in homepage
router.get("/loggedInView", (req, res) => {
  console.log("======================");
  if (req.session) {
    res.render("loggedInView", { loggedIn: true });
  } else {
    console.log("error");
  }
});

/*
router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  res.render('login');
});
*/
module.exports = router;
