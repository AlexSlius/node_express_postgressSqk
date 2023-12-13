const { Model } = require('sequelize')

const roles = require('./roles')
const tokenAdmins = require('./adminToken')

module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Admins.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'admins',
  });

  Admins.belongsTo(roles(sequelize, DataTypes), { as: 'roles', foreignKey: 'roleId' }) 
  Admins.hasMany(tokenAdmins(sequelize, DataTypes), { as: 'tokenAdmins', foreignKey: 'adminId' })

  return Admins;
};