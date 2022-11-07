/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('emotions').del()
  await knex('emotions').insert(
  [
    {id: 1, name: 'anger'},
    {id: 2, name: 'stress'},
    {id: 3, name: 'fear'},
    {id: 4, name: 'worry'},
    {id: 5, name: 'doubt'}
  ]
  )
}
