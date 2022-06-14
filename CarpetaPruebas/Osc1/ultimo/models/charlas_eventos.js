const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charlas_eventos', {
    id_charla_evento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_institucion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rainstitucion',
        key: 'id_institucion'
      }
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cupos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pais',
        key: 'id_pais'
      }
    },
    ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ciudad',
        key: 'id_ciudad'
      }
    },
    cuposdisponibles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_inscriptos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'charlas_eventos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_charla_evento" },
        ]
      },
      {
        name: "id_institucion",
        using: "BTREE",
        fields: [
          { name: "id_institucion" },
        ]
      },
      {
        name: "pais",
        using: "BTREE",
        fields: [
          { name: "pais" },
        ]
      },
      {
        name: "ciudad",
        using: "BTREE",
        fields: [
          { name: "ciudad" },
        ]
      },
    ]
  });
};
