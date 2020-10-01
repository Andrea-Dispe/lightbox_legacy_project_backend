module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fans: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // data: {
      //   type: DataTypes.BLOB('long'),
      // },
    },
    { freezeTableName: true },
  );

  return Image;
};
