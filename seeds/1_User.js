const authUtils = require('../utils/auth')


exports.seed = function(knex, Promise) {
  return knex('1_Users').del()
    .then(function () {
      return knex('1_Users').insert([
        {id: 1, name: 'Spencer', email: 'spencer.romberg@gmail.com', password: authUtils.hashPassword('spencer')},
        {id: 2, name: 'Brevon', email: 'brevon@pleeper.com', password: authUtils.hashPassword('brevon')},
        {id: 3, name: 'Kaitlin', email: 'kat@itsallergies.com', password: authUtils.hashPassword('kaitlin')}
      ]);
    });
};
