exports.up = function(knex, Promise) {
    return knex.schema.createTable('1_Users', (table) =>{
    table.increments();
    table.text('name').notNullable().unique();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    })
  };

  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('1_Users');
  };
