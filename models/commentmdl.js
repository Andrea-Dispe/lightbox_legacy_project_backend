module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comment;
};
