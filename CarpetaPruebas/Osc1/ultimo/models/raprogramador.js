const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('raprogramador', {
    id_programador: {
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
    id_lenguajes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'grupolenguajesprog',
        key: 'id_grupoleng'
      }
    },
    conocimientos: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'raprogramador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_programador" },
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
        name: "id_lenguajes",
        using: "BTREE",
        fields: [
          { name: "id_lenguajes" },
        ]
      },
    ]
  });
};
