const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Rate extends Model {}

Rate.init({})