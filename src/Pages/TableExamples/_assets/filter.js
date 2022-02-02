export const filterConfig = {
  singleValueFilterConfig: {
    status: [
      {
        label: `Status OK`,
        query: [`OK`],
      },
      {
        label: `Status FAILED`,
        query: [`FAIL`],
      },
    ],
    gender: [
      {
        label: `Мужчины`,
        query: [`Male`],
      },
      {
        label: `Женщины`,
        query: [`Female`],
      },
    ]
  },
  multiValueFilterConfig: [
    {
      label: `Search by status`,
      field: `status`
    },
    {
      label: `Search by email`,
      field: `email`
    },
  ],
  dateRangeFilterConfig: {
    field: `createdAt`,
    from: null,
    to: null
  },
}
