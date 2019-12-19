import { User } from '../models/User'
import UserPayload from '../domain/entities/User'

export async function fetchAll() {
  return await User.query()
}

export async function insertUser(params: UserPayload) {
  const password = 'password'
  const user = await User.query().insert({ ...params, password })
  return user
}
