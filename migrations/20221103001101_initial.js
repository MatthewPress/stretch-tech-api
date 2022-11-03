/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('emotions', function(table) {
      table.increments('id').primary();
      table.string('name');
  
      table.timestamps(true, true);
    })
    .createTable('quote', function(table) {
      table.increments('id').primary();
      table.integer('emotion_id').unsigned()
      table.foreign('emotion_id')
      .references('emotions.id');
      table.string('content');
  
      table.timestamps(true, true);
    })
    .createTable('advice', function(table) {
      table.increments('id').primary();
      table.integer('emotion_id').unsigned()
      table.foreign('emotion_id')
      .references('emotions.id');
      table.string('content');
  
      table.timestamps(true, true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
    .dropTable('advice')
    .dropTable('quote')
    .dropTable('emotions')
  };


