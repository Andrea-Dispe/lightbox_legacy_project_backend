module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true },
  );

  return Users;
};
