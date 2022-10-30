/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('emotionsTable').del()
  await knex('emotionsTable').insert(
    // {"greeting": "hey"}
  [
    {id: 1, emotionType: 'anger'},
    {id: 2, emotionType: 'stress'},
    {id: 3, emotionType: 'cool'},
    {id: 4, emotionType: 'swaggilicious'},
    {id: 5, emotionType: 'happy'},
    {id: 6, emotionType: 'mad'}
  ]
  );
};
