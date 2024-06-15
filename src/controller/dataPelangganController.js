const DataPelanggan = require('../models/dataPelangganModel');

exports.createDataPelanggan = async (req, res) => {
  try {
    const { tanggal, id_pelanggan, nama_pelanggan, alamat, no_tlp } = req.body;
    await DataPelanggan.createDataPelanggan({ tanggal, id_pelanggan, nama_pelanggan, alamat, no_tlp });
    res.status(201).json({ message: 'Data Pelanggan created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDataPelanggan = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_pelanggan, alamat, no_tlp } = req.body;
    await DataPelanggan.updateDataPelanggan(id, { nama_pelanggan, alamat, no_tlp });
    res.send({ message: 'Data Pelanggan updated successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDataPelanggan = async (req, res) => {
  try {
    const { id } = req.params;
    await DataPelanggan.deleteDataPelanggan(id);
    res.send({ message: 'Data Pelanggan deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllDataPelanggan = async (req, res) => {
  try {
    const [dataPelanggan] = await DataPelanggan.getAllDataPelanggan();
    res.json(dataPelanggan);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchDataPelanggan = async (req, res) => {
  try {
    const { query } = req.query;
    const [dataPelanggan] = await DataPelanggan.searchDataPelanggan(query);
    res.json(dataPelanggan);
  } catch (error) {
    res.status(500).send(error);
  }
};
