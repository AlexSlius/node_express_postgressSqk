const { Model } = require('sequelize');

const appeal = require('./appeal')

module.exports = (sequelize, DataTypes) => {
  class topics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  topics.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'topics',
  });

  topics.hasMany(appeal(sequelize, DataTypes), { foreignKey: 'topicId' })
  appeal(sequelize, DataTypes).belongsTo(topics)

  return topics;
};