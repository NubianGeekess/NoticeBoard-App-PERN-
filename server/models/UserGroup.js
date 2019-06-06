const userGroup = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },

  {
    freezeTableName: true,
    tableName: 'UserGroup',
  });

  return UserGroup;
};

export default userGroup;
