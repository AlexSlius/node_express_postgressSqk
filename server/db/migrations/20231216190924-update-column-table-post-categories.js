'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.renameColumn('postCategories', 'idPost', 'postId')
    await queryInterface.renameColumn('postCategories', 'idCategory', 'categoryId')
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.renameColumn('postCategories', 'postId', 'idPost')
    await queryInterface.renameColumn('postCategories', 'categoryId', 'idCategory')
  }
};
