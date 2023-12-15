const { Model } = require('sequelize');

const posts = require('./posts')
const categories = require('./categories')

module.exports = (sequelize, DataTypes) => {
  class PostCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  PostCategories.init({
    idPost: {
      type: DataTypes.INTEGER,
      references: {
        model: 'posts',
        key: 'id'
      }
    },
    idCategory: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'postCategories',
  });

  posts(sequelize, DataTypes).belongsToMany(categories(sequelize, DataTypes), {
    as: 'categories',
    through: PostCategories,
    sourceKey: 'id',
    foreignKey: 'idPost'
  })
  categories(sequelize, DataTypes).belongsToMany(posts(sequelize, DataTypes), {
    as: 'posts',
    through: PostCategories,
    sourceKey: 'id',
    foreignKey: 'idCategory'
  })

  return PostCategories;
};