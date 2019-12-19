import { Model } from 'objection'

export class User extends Model {
  email!: string
  username!: string
  password!: string
  name!: string

  // Each model must have a column (or a set of columns) that uniquely
  // identifies the rows. The column(s) can be specified using the `idColumn`
  // property. `idColumn` returns `id` by default and doesn't need to be
  // specified unless the model's primary key is something else.
  static get idColumn() {
    return 'uid'
  }

  static get tableName() {
    return 'users'
  }
}
