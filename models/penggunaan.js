'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penggunaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //inisiasi foreignkey id_pelanggan
      this.belongsTo(models.pelanggan, {
        foreignKey: 'id_pelanggan',
        as: 'pelanggan'
      })
    }
  };
  penggunaan.init({
    id_penggunaan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_pelanggan: DataTypes.INTEGER,
    bulan: DataTypes.STRING,
    tahun: DataTypes.STRING,
    meter_awal: DataTypes.FLOAT,
    meter_akhir: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'penggunaan',
    tableName: 'penggunaan'
  });
  return penggunaan;
};