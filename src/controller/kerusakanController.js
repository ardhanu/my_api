const Kerusakan = require('../models/kerusakanModel');

exports.createKerusakan = async (req, res) => {
  try {
    const { idKerusakan, namaKerusakan, solusi, penjelasan } = req.body; // Sesuaikan dengan nama kolom di model
    console.log('Request Body:', req.body); // Log request body
    
    await Kerusakan.createKerusakan({ idKerusakan, namaKerusakan, solusi, penjelasan }); // Sesuaikan dengan nama kolom di model
    
    res.status(201).json({ message: 'Data Kerusakan berhasil ditambahkan!' });
  } catch (error) {
    console.error('Controller Error:', error); // Log error
    res.status(500).json({ error: error.message });
  }
};

exports.updateKerusakan = async (req, res) => {
  try {
    await Kerusakan.updateKerusakan(req.params.id, req.body);
    res.send({ message: 'Data Kerusakan berhasil diupdate!' });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteKerusakan = async (req, res) => {
  try {
    await Kerusakan.deleteKerusakan(req.params.id);
    res.send({ message: 'Data Kerusakan berhasil dihapus!' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllKerusakan = async (req, res) => {
  try {
    const [kerusakan] = await Kerusakan.getAllKerusakan(); // Panggil metode getAllGejala dari model
    res.status(200).json(kerusakan); // Kirim respons sebagai array pertama
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getKerusakanById = async (req, res) => {
  try {
    const { id } = req.params; // Ambil ID kerusakan dari URL
    const [kerusakan] = await Kerusakan.getKerusakanById(id); // Panggil metode getKerusakanById dari model
    if (!kerusakan) {
      return res.status(404).json({ message: 'Kerusakan tidak ditemukan' });
    }
    res.status(200).json(kerusakan); // Kirim respons dengan data kerusakan
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

