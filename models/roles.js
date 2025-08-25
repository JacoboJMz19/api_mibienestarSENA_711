// models/role.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Un rol puede tener muchos usuarios
      Role.hasMany(models.User, { foreignKey: 'roleId', as: 'users' });
    }
  }
  Role.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
      tableName: 'Roles',
      timestamps: true, // createdAt y updatedAt
    }
  );
  return Role;
};
