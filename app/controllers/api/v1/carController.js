const carService = require("../../../services/carService");
const ApiError = require("../../../utils/error");

const create = async (req, res, next) => {
  try {
    const { name: createdBy } = req.user;
    const carData = {
      ...req.body,
      createdBy,
    };
    const car = await carService.createCar(carData);
    res.status(201).json({
      status: "success",
      message: "Car created successfully",
      data: car,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const update = async (req, res, next) => {
  try {
    const { name: updatedBy } = req.user;
    const carId = req.params.carId;
    const car = await carService.getCarById(carId);
    const carData = {
      ...req.body,
      updatedBy,
    };
    const updatedCar = await carService.updateCar(car, carData);
    res.status(200).json({
      status: "success",
      message: "Car updated successfully",
      data: updatedCar,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const remove = async (req, res, next) => {
  try {
    const { name: deletedBy } = req.user;
    const carId = req.params.carId;
    const car = await carService.getCarById(carId);
    const deletedCar = await carService.deleteCar(car, deletedBy);
    res.status(200).json({
      status: "success",
      message: "Car deleted successfully",
      data: deletedCar,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const get = async (req, res, next) => {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json({
      status: "success",
      message: "Cars retrieved successfully",
      data: cars,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const getAll = async (req, res, next) => {
  try {
    const cars = await carService.getAllCarsWithDeleted();
    res.status(200).json({
      status: "success",
      message: "Cars retrieved successfully",
      data: cars,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

module.exports = { create, update, remove, get, getAll };
