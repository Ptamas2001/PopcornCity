module.exports = (sequelize, DataTypes) => {
    const Chairs = sequelize.define("Chairs", {
      musorId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Chairs;
  };
  