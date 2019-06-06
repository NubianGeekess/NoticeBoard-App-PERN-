const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        isEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty: true,
      },
    },

  });

  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      as: 'Group',
      through: models.UserGroup,
      foreignKey: 'username',
    });
  };

  return User;
};

export default user;
