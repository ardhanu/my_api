const db = require('../config/db');

class DataPelanggan {
  static async createDataPelanggan(data) {
    await db.query('INSERT INTO data_pelanggan (tanggal, id_pelanggan, nama_pelanggan, alamat, no_tlp) VALUES (?, ?, ?, ?, ?)', [data.tanggal, data.id_pelanggan, data.nama_pelanggan, data.alamat, data.no_tlp]);
  }

  static async updateDataPelanggan(id, data) {
    await db.query('UPDATE data_pelanggan SET nama_pelanggan = ?, alamat = ?, no_tlp = ? WHERE id_pelanggan = ?', [data.nama_pelanggan, data.alamat, data.no_tlp, id]);
  }

  static async deleteDataPelanggan(id) {
    await db.query('DELETE FROM data_pelanggan WHERE id_pelanggan = ?', [id]);
  }

  static async getAllDataPelanggan() {
    const dataPelanggan = await db.query('SELECT * FROM data_pelanggan');
    return dataPelanggan;
  }

  static async searchDataPelanggan(query) {
    const searchQuery = `%${query}%`;
    const dataPelanggan = await db.query('SELECT * FROM data_pelanggan WHERE id_pelanggan LIKE ? OR nama_pelanggan LIKE ?', [searchQuery, searchQuery]);
    return dataPelanggan;
  }
}

module.exports = DataPelanggan;
