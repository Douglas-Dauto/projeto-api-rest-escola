'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Bruno',
        email: 'brunofabris@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Lucas',
        email: 'lucasfabris@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Júnior',
        email: 'juniorfabris@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down () {}
};
