const { Model } = require('sequelize');

const categories = require('./categories')

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Posts.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    text: DataTypes.TEXT,
    picture: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('picture')
        return rawValue ? `${process.env.DOMAIN}/${process.env.PATH_PUBLIC_IMAGE}/${rawValue}` : ''
      },
    },
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

  Posts.belongsToMany(categories(sequelize, DataTypes), {
    as: 'categories',
    through: 'postCategories',
    sourceKey: 'id',
    foreignKey: 'postId'
  })

  categories(sequelize, DataTypes).belongsToMany(Posts, {
    as: 'posts',
    through: 'postCategories',
    sourceKey: 'id',
    foreignKey: 'categoryId'
  })

  return Posts;
};