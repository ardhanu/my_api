const db = require("../config/db");

class DataPelanggan {
	static async createDataPelanggan(data) {
		const now = new Date();
		const formatted = now.toISOString().slice(0, 19).replace("T", " ");
		await db.query(
			"INSERT INTO pelanggan (createdAt, id_pelanggan, nama_pelanggan, alamat, no_telp) VALUES (?, ?, ?, ?, ?)",
			[formatted, data.id_pelanggan, data.nama_pelanggan, data.alamat, data.no_telp],
		);
	}

	static async updateDataPelanggan(id, data) {
		await db.query("UPDATE pelanggan SET nama_pelanggan = ?, alamat = ?, no_tlp = ? WHERE id_pelanggan = ?", [
			data.nama_pelanggan,
			data.alamat,
			data.no_tlp,
			id,
		]);
	}

	static async deleteDataPelanggan(id) {
		await db.query("DELETE FROM pelanggan WHERE id_pelanggan = ?", [id]);
	}

	static async getAllDataPelanggan() {
		const dataPelanggan = await db.query("SELECT * FROM pelanggan");
		return dataPelanggan;
	}

	static async searchDataPelanggan(query) {
		const searchQuery = `%${query}%`;
		const dataPelanggan = await db.query("SELECT * FROM pelanggan WHERE id_pelanggan LIKE ? OR nama_pelanggan LIKE ?", [
			searchQuery,
			searchQuery,
		]);
		return dataPelanggan;
	}
}

module.exports = DataPelanggan;
