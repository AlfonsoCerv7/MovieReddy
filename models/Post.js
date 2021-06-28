const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

// create our Post model
class Post extends Model {
  static upvote(body, models) {
    return models.Rate.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          "id",
          "movie_review",
          "star_rating",
          "title",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM rate WHERE post.id = rate.post_id)"
            ),
            "rate_count",
          ],
        ],
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    star_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      is: /^[1-5]$/,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
