module.exports = (sequelize, DataTypes) => {
    const Logs = sequelize.define("Logs", {
      loginCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Logs;
  };
  