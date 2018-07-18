var knex = require('./connection')

module.exports = {
  getUsers: function() {
    return knex('1_Users').select()
  },
  getUserById: function(id) {
    return knex('1_Users').select().where('id', id)
  },
  getUserByName: function(name) {
    return knex('1_Users').select().where('name', name).first()
  },
  getSecretsByUserId: function(id) {
    return knex('secrets')
      .select('id', 'secret')
      .where('user_id', id)
  }
}
