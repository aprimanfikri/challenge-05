const { Car } = require("../models");

const createCar = async (carData) => {
  return Car.create(carData);
};

const getCarById = async (carId) => {
  return Car.findByPk(carId);
};

const updateCar = async (car, carData) => {
  return car.update(carData);
};

const deleteCar = async (car, deletedBy) => {
  return car.update({ deletedBy });
};

const getAllCars = async () => {
  return Car.findAll({
    where: {
      deletedBy: null,
    },
    attributes: {
      exclude: [
        "createdAt",
        "updatedAt",
        "deletedBy",
        "createdBy",
        "updatedBy",
      ],
    },
  });
};

const getAllCarsWithDeleted = async () => {
  return Car.findAll();
};

module.exports = {
  createCar,
  getCarById,
  updateCar,
  deleteCar,
  getAllCars,
  getAllCarsWithDeleted,
};
