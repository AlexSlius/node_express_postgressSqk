const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class appeal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  appeal.init({
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appeal',
  });

  return appeal;
};