const db = require("../config/db");

class HasilDiagnosa {
	static async createHasilDiagnosa(data) {
		const result = await db.query(
			"INSERT INTO hasil_diagnosa (tanggal, nama_pelanggan, kerusakan_1, kerusakan_2, kerusakan_3) VALUES (?, ?, ?, ?, ?)",
			[data.tanggal, data.nama_pelanggan, data.kerusakan_1, data.kerusakan_2, data.kerusakan_3],
		);
		return result;
	}

	static async createDetailHasilDiagnosa(data) {
		console.log("Data: ", data);
		try {
			const result = await db.query(
				"INSERT INTO detail_diagnosa (nama_pelanggan, tanggal, kerusakan_1, kerusakan_2, kerusakan_3, solusi_1, solusi_2, solusi_3, penjelasan_1, penjelasan_2, penjelasan_3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				[
					data.nama_pelanggan,
					data.tanggal,
					data.kerusakan_1,
					data.kerusakan_2,
					data.kerusakan_3,
					data.solusi_1,
					data.solusi_2,
					data.solusi_3,
					data.penjelasan_1,
					data.penjelasan_2,
					data.penjelasan_3,
				],
			);
			return result;
		} catch (error) {
			console.error("Error in createDetailHasilDiagnosa: ", error);
			throw error; // Rethrow the error to be caught by the calling function
		}
	}
	static async deleteHasilDiagnosa(nama_pelanggan) {
		const result = await db.query("DELETE FROM hasil_diagnosa WHERE nama_pelanggan = ?", [nama_pelanggan]);
		return result;
	}

	static async getAllHasilDiagnosa() {
		const result = await db.query("SELECT * FROM hasil_diagnosa");
		return result;
	}

	static async searchHasilDiagnosa(query) {
		const searchQuery = `%${query}%`;
		const result = await db.query("SELECT * FROM hasil_diagnosa WHERE nama_pelanggan LIKE ?", [searchQuery]);
		return result; // Jangan gunakan array destructuring di sini
	}
}

module.exports = HasilDiagnosa;
