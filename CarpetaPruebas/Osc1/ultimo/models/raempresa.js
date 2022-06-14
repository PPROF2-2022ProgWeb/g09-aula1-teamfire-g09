const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raempresa', {
    id_empresa: {
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
    id_entidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entidades',
        key: 'id_entidad'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
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
    rubro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    actividades: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raempresa',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
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
        name: "id_entidad",
        using: "BTREE",
        fields: [
          { name: "id_entidad" },
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
