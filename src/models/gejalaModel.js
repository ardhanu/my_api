const db = require('../config/db');

class Gejala {
  static async createGejala(data) {
    await db.query('INSERT INTO gejala (id_gejala, namaGejala) VALUES (?, ?)', [data.id_gejala, data.namaGejala]);
  }

  static async updateGejala(id, data) {
    await db.query('UPDATE gejala SET namaGejala = ? WHERE id_gejala = ?', [data.namaGejala, id]);
  }

  static async deleteGejala(id) {
    await db.query('DELETE FROM gejala WHERE id_gejala = ?', [id]);
  }

  static async getAllGejala() {
    const gejala = await db.query('SELECT * FROM gejala ORDER BY id_gejala ASC');
    return gejala;
  }  

}

module.exports = Gejala;
