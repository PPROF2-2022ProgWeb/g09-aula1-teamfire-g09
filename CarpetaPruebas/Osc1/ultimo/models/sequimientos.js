const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sequimientos', {
    id_sequimiento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    solcicitud: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    especificacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechafinalizacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    linkdearchivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    observacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sequimientos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sequimiento" },
        ]
      },
    ]
  });
};
