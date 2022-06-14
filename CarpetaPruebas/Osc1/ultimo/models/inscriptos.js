const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inscriptos', {
    id_inscripcion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_charla_evento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'charlas_eventos',
        key: 'id_charla_evento'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'registro',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'inscriptos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_inscripcion" },
        ]
      },
      {
        name: "id_charla_evento",
        using: "BTREE",
        fields: [
          { name: "id_charla_evento" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
