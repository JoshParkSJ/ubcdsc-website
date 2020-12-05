const connection = require('../database');

const multiplyController = async (req, res) => {
  connection.query('SELECT * FROM events', (err, rows, fields) => {
    if (!err) {
      console.log(rows)
      res.send(rows)
    } else {
      console.log(err);
    }
  })
};

module.exports = multiplyController;