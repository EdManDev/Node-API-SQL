var mysql = require("mysql");

// ======================================================================================
// @desc      create user
// @route     POST /api/create
// @access    Public
// ======================================================================================
exports.read = (req, res) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);
	var sql = "SELECT * FROM`products`";
	connection.query(sql, (err, results, fields) => {
		connection.end;
		if (err) {
			next(err);
		} else {
			res.json(results);
		}
	});
};
