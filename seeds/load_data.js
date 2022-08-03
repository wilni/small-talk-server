const userData = require('../seeds_data/users');
const connectionData = require('../seeds_data/connections');
const messageData = require('../seeds_data/messages');


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users')
  .del()
  .then(() => {
    return knex('users').insert(userData);
  })
  .then(() => {
    return knex('connections').del();
  })
  .then(() => {
    return knex('connections').insert(connectionData);
  })
  .then(() => {
    return knex('messages').del();
  })
  .then(() => {
    return knex('messages').insert(messageData);
  })
};


