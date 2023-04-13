module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      musorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Cart;
  };
  