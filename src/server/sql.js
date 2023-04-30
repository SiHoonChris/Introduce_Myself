module.exports = {
  numOfViewers: {
    query: `SELECT MAX(view_count) FROM views; `
  },
  countViewers: {
    query: `INSERT INTO views VALUES (null, now()); `
  }
}
