const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicios', {
    id_servicio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tiposervicio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    precioperiodo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_precio_perido: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'servicio_precio_periodo',
        key: 'id_precio_perido'
      }
    }
  }, {
    sequelize,
    tableName: 'servicios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servicio" },
        ]
      },
      {
        name: "id_precio_perido",
        using: "BTREE",
        fields: [
          { name: "id_precio_perido" },
        ]
      },
    ]
  });
};
