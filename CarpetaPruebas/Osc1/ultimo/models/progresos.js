const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('progresos', {
    id_progreso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'registro',
        key: 'id_usuario'
      }
    },
    id_proyecto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proyectos',
        key: 'id_proyecto'
      }
    },
    id_sequimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sequimientos',
        key: 'id_sequimiento'
      }
    }
  }, {
    sequelize,
    tableName: 'progresos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_progreso" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_proyecto",
        using: "BTREE",
        fields: [
          { name: "id_proyecto" },
        ]
      },
      {
        name: "id_sequimiento",
        using: "BTREE",
        fields: [
          { name: "id_sequimiento" },
        ]
      },
    ]
  });
};
