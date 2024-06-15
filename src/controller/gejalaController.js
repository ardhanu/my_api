const Gejala = require('../models/gejalaModel');

exports.createGejala = async (req, res) => {
  try {
    const { id_gejala, namaGejala } = req.body; // Sesuaikan dengan nama kolom di model
    await Gejala.createGejala({ id_gejala, namaGejala }); // Sesuaikan dengan nama kolom di model
    res.status(201).json({ message: 'Gejala created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGejala = async (req, res) => {
  try {
    await Gejala.updateGejala(req.params.id, req.body);
    res.send({ message: 'Gejala updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message }); // Sesuaikan dengan logika bisnis Anda
  }
};

exports.deleteGejala = async (req, res) => {
  try {
    await Gejala.deleteGejala(req.params.id);
    res.send({ message: 'Gejala deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getAllGejala = async (req, res) => {
  try {
    const [gejala] = await Gejala.getAllGejala(); // Panggil metode getAllGejala dari model
    res.status(200).json(gejala); // Kirim respons sebagai array pertama
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
