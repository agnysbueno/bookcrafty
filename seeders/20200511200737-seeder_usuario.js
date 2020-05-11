'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('usuario', [
      {
        nome: 'John Doe',
        email: 'johndoe@mail.com',
        senha: bcrypt.hashSync('123456', 10)
      },
      {
        nome: 'Murilo',
        email: 'murilo@mail.com',
        senha: bcrypt.hashSync('1234567', 10)
      },
      {
        nome: 'Larissa',
        email: 'larry@mail.com',
        senha: bcrypt.hashSync('1234a756', 10)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('usuario', null, {});
  }
};
