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

	static async updateDataPelanggan(data) {
		if (!data.nama_pelanggan || !data.alamat || !data.no_telp) {
			throw new Error('Missing required fields: nama_pelanggan, alamat, no_telp');
		}
	
		await db.query("UPDATE pelanggan SET nama_pelanggan = ?, alamat = ?, no_telp = ? WHERE id_pelanggan = ?", [
			data.nama_pelanggan,
			data.alamat,
			data.no_telp,
			data.id_pelanggan,
		]);
	}

    static async deleteDataPelanggan(nama_pelanggan) {
        try {
            console.log(`Executing DELETE query for nama_pelanggan: ${nama_pelanggan}`); // Logging
            const result = await db.query("DELETE FROM pelanggan WHERE nama_pelanggan = ?", [nama_pelanggan]);
            console.log(`Query result: `, result); // Logging
        } catch (error) {
            console.error(`Error in DELETE query: `, error); // Logging
            throw error; // Rethrow the error to be caught by the controller
        }
    }

	static async getAllDataPelanggan() {
		const dataPelanggan = await db.query("SELECT * FROM pelanggan");
		return dataPelanggan;
	}

	static async getPelangganById(id_pelanggan) {
        const [rows] = await db.query("SELECT * FROM pelanggan WHERE id_pelanggan = ?", [id_pelanggan]);
        return rows[0]; // Assuming id_pelanggan is unique, so we return the first row
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
