const group = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupname: {
      type: DataTypes.STRINGS,
      primaryKey: true,
      unique: true,
      allowNull: false,
      validate: {
        isEmpty: true,
      },
    },
  });

  Group.associate = (models) => {
    Group.belongsToMany(models.User, {
      as: 'Members',
      through: models.UserGroup,
      foreignKey: 'groupname',
    });
  };

  return Group;
};

export default group;
