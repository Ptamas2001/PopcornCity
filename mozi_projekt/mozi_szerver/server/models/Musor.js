module.exports = (sequelize, DataTypes) => {
    const Musor = sequelize.define("Musor", {
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movieTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ticketsLeft: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startAt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dimension: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Musor;
  };
  