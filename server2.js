const express = require("express");
const morgan = require("morgan");
var mysql = require("mysql");

require("dotenv").config();
// import routes
// const authRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));

var config = {
	host: "localhost",
	port: "3306",
	user: "root",
	password: "",
	database: "react_sql",
};

app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// ======================================================================================
// @desc      READ
// @route     POST /read
// @access    Public
// ======================================================================================
app.get("/read", (req, res, next) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);
	var sql = "SELECT * FROM `products`";
	connection.query(sql, (err, results, fields) => {
		connection.end;
		if (err) {
			next(err);
		} else {
			res.json(results);
		}
	});
});

// ======================================================================================
// @desc      UPDATE
// @route     POST /update
// @access    Public
// ======================================================================================
app.put("/update", (req, res, next) => {
	var mysql = require("mysql");
	var connection = mysql.createConnection(config);

	var sql = "UPDATE products SET name=? WHERE price=?";
	connection.query(
		sql,
		[req.body.name, req.body.price],
		(err, results, fields) => {
			connection.end();
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		}
	);
});

// // routes middleware
// app.use("/api", authRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
