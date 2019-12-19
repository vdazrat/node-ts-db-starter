import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  return await knex.schema.createTable('users', function(table) {
    table.increments('uid').primary()
    table.string('username')
    table.string('password')
    table.string('name')
    table.string('email')
    table.timestamps()
  })
}

export async function down(knex: Knex): Promise<any> {
  return await knex.schema.dropTable('users')
}
