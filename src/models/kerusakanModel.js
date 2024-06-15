const db = require('../config/db');

class Kerusakan {
  static async createKerusakan(data) {
    try {
      const [result] = await db.query(
        'INSERT INTO kerusakan (id_kerusakan, namaKerusakan, solusi, penjelasan) VALUES (?, ?, ?, ?)',
        [data.idKerusakan, data.namaKerusakan, data.solusi, data.penjelasan]
      );
      return { idKerusakan: data.idKerusakan, ...data };
    } catch (error) {
      console.error('Database Error:', error); // Log error
      throw error;
    }
  }

  static async updateKerusakan(id, data) {
    await db.query('UPDATE kerusakan SET namaKerusakan = ?, solusi = ?, penjelasan = ? WHERE id_kerusakan = ?', [data.namaKerusakan, data.solusi, data.penjelasan, id]);
  }

  static async deleteKerusakan(id) {
    await db.query('DELETE FROM kerusakan WHERE id_kerusakan = ?', [id]);
  }

  static async getAllKerusakan() {
    const kerusakan = await db.query('SELECT * FROM kerusakan');
    return kerusakan;
  }

  static async getKerusakanById(id) {
    try {
      const [kerusakan] = await db.query('SELECT * FROM kerusakan WHERE id_kerusakan = ?', [id]);
      return kerusakan;
    } catch (error) {
      console.error('Database Error:', error); // Log error
      throw error;
    }
  }
  
}


module.exports = Kerusakan;
