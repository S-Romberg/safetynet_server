exports.up = function(knex, Promise) {
    return knex.schema.createTable('quotes_table', (table) =>{
    table.increments();
    table.text('quote').notNullable()
    table.text('author').notNullable()
    })
  };

  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quotes_table');
  };
