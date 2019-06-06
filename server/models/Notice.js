const notice = (sequelize, DataTypes) => {
  const Notice = sequelize.define('Notice', {
    fromUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    toGroup: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    notice: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmpty: true,
      },
    },

    priority: {
      type: DataTypes.ENUM,
      values: ['normal', 'urgent', 'critical'],
      allowNull: false,
      validate: {
        isIn: [['normal', 'urgent', 'critical']],
      },
    },
  });

  return Notice;
};

export default notice;
