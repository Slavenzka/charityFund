import { nanoid } from 'nanoid'

export const tableData = [
  {
    id: nanoid(7),
    name: `John Doe`,
    email: `john@doe.com`,
    phone: `11111111111`,
    status: `OK`,
    gender: `Male`
  },
  {
    id: nanoid(7),
    name: `Jane Doe`,
    email: `jane@doe.com`,
    phone: `22222222222222`,
    status: `FAIL`,
    gender: `Female`
  },
  {
    id: nanoid(7),
    name: `Billy Bob`,
    email: `billy@bob.com`,
    phone: `333333333`,
    status: `OK`,
    gender: `Male`
  },
]