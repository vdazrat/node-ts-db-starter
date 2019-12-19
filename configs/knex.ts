import path from 'path'
import Knex from 'knex'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env') })
const migrationDir = path.resolve(__dirname, '../src/database/migrations')

console.log('running ', process.env.DB_CLIENT)

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: migrationDir,
  },
}

export const knexConfig = Knex<any, any[]>(dbConfig)

module.exports = dbConfig
