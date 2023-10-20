const carRepository = require("../repositories/carRepository");

const createCar = async (carData) => {
  return carRepository.createCar(carData);
};

const updateCar = async (car, carData) => {
  return carRepository.updateCar(car, carData);
};

const deleteCar = async (car, deletedBy) => {
  return carRepository.deleteCar(car, deletedBy);
};

const getCarById = async (carId) => {
  return carRepository.getCarById(carId);
};

const getAllCars = async () => {
  return carRepository.getAllCars();
};

const getAllCarsWithDeleted = async () => {
  return carRepository.getAllCarsWithDeleted();
};

module.exports = {
  createCar,
  updateCar,
  deleteCar,
  getCarById,
  getAllCars,
  getAllCarsWithDeleted,
};
