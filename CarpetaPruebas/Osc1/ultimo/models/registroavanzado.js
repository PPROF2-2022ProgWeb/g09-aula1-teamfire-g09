const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registroavanzado', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'registro',
        key: 'id_usuario'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechadenacimiento: {
      type: DataTypes.DATEONLY,
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
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'registroavanzado',
    timestamps: true,
    indexes: [
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
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
