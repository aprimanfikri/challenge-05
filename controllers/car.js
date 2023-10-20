const { Car } = require("../models");
const ApiError = require("../utils/error");

const create = async (req, res, next) => {
  try {
    const { name: createdBy } = req.user;
    const car = await Car.create({
      ...req.body,
      createdBy,
    });
    res.status(201).json({
      status: "success",
      message: "Car created successfully",
      data: car,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const update = async (req, res) => {
  try {
    const { name: updatedBy } = req.user;
    const carId = req.params.carId;
    const car = await Car.findByPk(carId);
    await car.update({
      ...req.body,
      updatedBy,
    });
    res.status(200).json({
      status: "success",
      message: "Car updated successfully",
      data: car,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const remove = async (req, res) => {
  try {
    const { name: deletedBy } = req.user;
    const carId = req.params.carId;
    const car = await Car.findByPk(carId);
    await car.update({ deletedBy });
    // await car.destroy();
    res.status(200).json({
      status: "success",
      message: "Car deleted successfully",
      data: car,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const get = async (req, res) => {
  try {
    const cars = await Car.findAll({
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
    res.status(200).json({
      status: "success",
      message: "Cars retrieved successfully",
      data: cars,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const getAll = async (req, res) => {
  try {
    const cars = await Car.findAll();
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
