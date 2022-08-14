/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
        table.string('username').notNullable();
        table.string('email').notNullable().primary();
    })
    .createTable('connections', (table) => {
        table.string('connection_id').notNullable().primary();
        table.string('email_1').notNullable().references('email').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('email_2').notNullable().references('email').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('messages', (table) => {
        table.string('message_id').notNullable().primary();
        table.string('sender_email').notNullable().references('email').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('recipient_email').notNullable().references('email').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('connection_id').notNullable().references('connection_id').inTable('connections').onUpdate('CASCADE').onDelete('CASCADE');
        table.text('content');
        table.string('sent_at');
        table.boolean("read").defaultTo(false);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('messages').dropTable('connections').dropTable('users');
};
