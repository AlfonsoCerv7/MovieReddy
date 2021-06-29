const Post = require("./Post");
const User = require("./User");
//const Rate = require('./Rate');
//const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

/*
User.belongsToMany(Post, {
  through: Rate,
  as: 'rated_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Rate,
  as: 'rated_posts',
  foreignKey: 'post_id'
});

Rate.belongsTo(User, {
  foreignKey: 'user_id'
});

Rate.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Rate, {
  foreignKey: 'user_id'
});

Post.hasMany(Rate, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

*/
module.exports = { User, Post };