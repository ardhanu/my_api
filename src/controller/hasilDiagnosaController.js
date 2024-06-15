const HasilDiagnosa = require('../models/hasilDiagnosaModel');

exports.createHasilDiagnosa = async (req, res) => {
  try {
    const { tanggal, nama_pelanggan, kerusakan_nama1, kerusakan_nama2, kerusakan_nama3 } = req.body;
    await HasilDiagnosa.createHasilDiagnosa({ tanggal, nama_pelanggan, kerusakan_nama1, kerusakan_nama2, kerusakan_nama3 });
    res.status(201).json({ message: 'Hasil diagnosa created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHasilDiagnosa = async (req, res) => {
  try {
    await HasilDiagnosa.deleteHasilDiagnosa(req.params.nama_pelanggan);
    res.status(200).json({ message: 'Hasil diagnosa deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllHasilDiagnosa = async (req, res) => {
  try {
    const [hasilDiagnosa] = await HasilDiagnosa.getAllHasilDiagnosa();
    res.status(200).json(hasilDiagnosa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchHasilDiagnosa = async (req, res) => {
  try {
    const { query } = req.query;
    const [hasilDiagnosa] = await HasilDiagnosa.searchHasilDiagnosa(query);
    res.json(hasilDiagnosa);
  } catch (error) {
    res.status(500).send(error);
  }
};
