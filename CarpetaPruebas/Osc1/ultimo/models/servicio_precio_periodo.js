const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicio_precio_periodo', {
    id_precio_perido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descuento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'servicio_precio_periodo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_precio_perido" },
        ]
      },
    ]
  });
};
