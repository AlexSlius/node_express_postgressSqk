const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  posts.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    text: DataTypes.TEXT,
    picture: DataTypes.STRING,
    idAdmin: {
      type: DataTypes.INTEGER,
      references: {
        model: 'admins',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'posts',
  });

  return posts;
};