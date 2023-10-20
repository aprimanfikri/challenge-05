"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.User, {
        foreignKey: "createdBy",
      });
      Car.belongsTo(models.User, {
        foreignKey: "updatedBy",
      });
      Car.belongsTo(models.User, {
        foreignKey: "deletedBy",
      });
    }
  }
  Car.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      year: DataTypes.INTEGER,
      category: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      updatedBy: DataTypes.STRING,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
