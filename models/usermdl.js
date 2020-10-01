module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pumpkins: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true },
  );

  return User;
};
