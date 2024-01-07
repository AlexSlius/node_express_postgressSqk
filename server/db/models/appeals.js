const { Model } = require('sequelize');

const topics = require('./topics')

module.exports = (sequelize, DataTypes) => {
  class appeals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  appeals.init({
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'topics',
        key: 'id',
      }
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appeals',
  });

  topics(sequelize, DataTypes).hasMany(appeals, {
    as: 'appeals',
    foreignKey: 'topicId'
  });

  appeals.belongsTo(topics(sequelize, DataTypes));

  return appeals;
};