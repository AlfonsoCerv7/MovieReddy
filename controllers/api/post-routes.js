//Post Routes
const router = require("express").Router();
const sequelize = require("../../config/connections");
const { Post, User, Vote, Comment } = require("../../models");
const withAuth = require("../../utils/auth");
// get all posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    order: [["created_at", "DESC"]],
    attributes: [
      "id",
      "movie_review",
      "star_rating",
      "genre",
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
      // include the Comment model here:

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
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one post
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "movie_review",
      "star_rating",
      "genre",
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
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post a review
router.post("/", (req, res) => {
  // expects {title: '"Titanic", movie_review:"It's a classic!". star_rating: 5, genre: "Drama", user_id: 1}
  Post.create({
    title: req.body.title,
    movie_review: req.body.movie_review,
    star_rating: req.body.star_rating,
    genre: req.body.genre,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/upvote", withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upvote(
    { ...req.body, user_id: req.session.user_id },
    { Vote, Comment, User }
  )
    .then((updatedVoteData) => res.json(updatedVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update post
router.put("/:id", (req, res) => {
  Post.update(
    {
      title: req.body.title,
      movie_review: req.body.movie_review,
      star_rating: req.body.star_rating,
      genre: req.body.genre,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
