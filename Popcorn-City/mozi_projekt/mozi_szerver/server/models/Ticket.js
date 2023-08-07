module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      types: {
        type: DataTypes.STRING,
        
      },
      typeValue: {
        type: DataTypes.STRING,
        
      },
      infos: {
        type: DataTypes.STRING,
        
      },
      price: {
        type: DataTypes.INTEGER,
       
      },
      description: {
        type: DataTypes.STRING,
       
      },
      isFelkapott: {
        type: DataTypes.BOOLEAN,
        
      },
    });
  
    return Ticket;
  };
  