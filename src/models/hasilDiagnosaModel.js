const db = require('../config/db');

class HasilDiagnosa {
  static async createHasilDiagnosa(data) {
    const result = await db.query(
      'INSERT INTO rekam_hasil_diagnosa (tanggal, nama_pelanggan, kerusakan_nama1, kerusakan_nama2, kerusakan_nama3) VALUES (?, ?, ?, ?, ?)', 
      [data.tanggal, data.nama_pelanggan, data.kerusakan_nama1, data.kerusakan_nama2, data.kerusakan_nama3]
    );
    return result;
  }

  static async deleteHasilDiagnosa(nama_pelanggan) {
    const result = await db.query('DELETE FROM rekam_hasil_diagnosa WHERE nama_pelanggan = ?', [nama_pelanggan]);
    return result;
  }

  static async getAllHasilDiagnosa() {
    const result = await db.query('SELECT * FROM rekam_hasil_diagnosa');
    return result;
  }

  static async searchHasilDiagnosa(query) {
    const searchQuery = `%${query}%`;
    const result = await db.query('SELECT * FROM rekam_hasil_diagnosa WHERE nama_pelanggan LIKE ?', [searchQuery]);
    return result; // Jangan gunakan array destructuring di sini
  }
}

module.exports = HasilDiagnosa;
