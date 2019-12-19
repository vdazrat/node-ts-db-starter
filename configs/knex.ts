import path from 'path'
import Knex from 'knex'
import { Model } from 'objection'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env') })
const migrationDir = path.resolve(__dirname, '../src/database/migrations')

console.log('Starting DB client - ', process.env.DB_CLIENT)

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

// initialize objection
const knexConfig = Knex<any, any[]>(dbConfig)
Model.knex(knexConfig)

module.exports = dbConfig
