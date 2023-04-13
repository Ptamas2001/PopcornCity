module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teljesNev: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefonszam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    premium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Users;
};
