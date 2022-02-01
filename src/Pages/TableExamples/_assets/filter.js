export const filterConfig = {
  singleValueFilterConfig: {
    status: [
      {
        label: `Status OK`,
        query: [`OK`],
        isApplied: false
      },
      {
        label: `Status FAILED`,
        query: [`FAIL`],
        isApplied: false
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
}
