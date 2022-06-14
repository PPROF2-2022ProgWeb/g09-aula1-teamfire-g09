const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participantes', {
    id_participante: {
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
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_progreso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'progresos',
        key: 'id_progreso'
      }
    }
  }, {
    sequelize,
    tableName: 'participantes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_participante" },
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
        name: "id_progreso",
        using: "BTREE",
        fields: [
          { name: "id_progreso" },
        ]
      },
    ]
  });
};
