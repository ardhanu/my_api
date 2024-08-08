const db = require("../config/db");

class Admin {
	static async login(username, password) {
		const [rows] = await db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
		return rows[0];
	}
}

module.exports = Admin;
