import { nanoid } from 'nanoid'

export const tableData = [
  {
    id: nanoid(7),
    name: `John Doe`,
    email: `john@doe.com`,
    phone: `11111111111`,
    status: `OK`,
    gender: `Male`,
    createdAt: Date.now()
  },
  {
    id: nanoid(7),
    name: `Jane Doe`,
    email: `jane@doe.com`,
    phone: `22222222222222`,
    status: `FAIL`,
    gender: `Female`,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
  },
  {
    id: nanoid(7),
    name: `Billy Bob`,
    email: `billy@bob.com`,
    phone: `333333333`,
    status: `OK`,
    gender: `Male`,
    createdAt: Date.now() + 2 * 1000 * 60 * 60 * 24 * 30
  },
  {
    id: nanoid(7),
    name: `Someone special`,
    email: `someone@special.com`,
    phone: `1111`,
    status: `OK`,
    gender: `Unknown`,
    createdAt: Date.now() + 2 * 1000 * 60 * 60 * 24 * 30
  },
]