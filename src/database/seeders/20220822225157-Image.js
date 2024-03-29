'use strict';

const userIndex = require('../../models/users.model')
const productIndex = require('../../models/product.model')

module.exports = {
  async up(queryInterface, Sequelize) {
    let allImages = []
    let defaultImage = {nombre:"default-avatar.png" }
    allImages.push(defaultImage)

    userIndex.index().map(user => {
      let imagesU = {
        nombre: user.imagenId,
      }
      return allImages.push(imagesU)
    })

    productIndex.index().map(product => {
      let imagesP = {
        nombre: product.imagen,
      }
      return allImages.push(imagesP)
    })
    
    await queryInterface.bulkInsert('imagen', allImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('imagen', null, {});
  }
};

