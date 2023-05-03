module.exports = {
  numOfViewers: {
    query: `SELECT MAX(view_count) num FROM views; `
  },
  countViewers: {
    query: `INSERT INTO views VALUES (null, now()); `
  }
}
