const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AdminToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  AdminToken.init({
    adminId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'admins',
        key: 'id',
      }
    },
    token: DataTypes.STRING,
    timeOfLife: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'adminToken',
  });

  return AdminToken;
};