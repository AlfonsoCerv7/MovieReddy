const { Post } = require("../models");
//seed posts
const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_content: "test10",
    user_id: 10,
    movie_review: "So much action!",
    star_rating: 4,
    genre: "Action",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
