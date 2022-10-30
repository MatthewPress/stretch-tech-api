/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('emotionsTable', (table) => {
      table.increments('id').primary(); // this represents the primary key.
      table.string('emotionType') // this is a column.
  }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.dropTableIfExists('emotionsTable')
};
