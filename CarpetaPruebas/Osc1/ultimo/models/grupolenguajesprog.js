const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupolenguajesprog', {
    id_grupoleng: {
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
    id_lenguaje: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lenguajes',
        key: 'id_lenguaje'
      }
    }
  }, {
    sequelize,
    tableName: 'grupolenguajesprog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_grupoleng" },
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
        name: "id_lenguaje",
        using: "BTREE",
        fields: [
          { name: "id_lenguaje" },
        ]
      },
    ]
  });
};
