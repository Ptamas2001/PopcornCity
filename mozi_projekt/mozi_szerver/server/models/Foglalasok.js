module.exports = (sequelize, DataTypes) => {
    const Foglalasok = sequelize.define("Foglalasok", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      musorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Foglalasok;
  };
  