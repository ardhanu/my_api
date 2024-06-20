const express = require('express');
const dataPelangganController = require('../controller/dataPelangganController');

const router = express.Router();

router.get('/pelanggan', dataPelangganController.getAllDataPelanggan);
router.get('/pelanggan/search', dataPelangganController.searchDataPelanggan);
router.get('/pelanggan/:id_pelanggan', dataPelangganController.getPelangganById);
router.post('/pelanggan', dataPelangganController.createDataPelanggan);
router.patch('/pelanggan/:id_pelanggan', dataPelangganController.updateDataPelanggan);
router.delete('/pelanggan/:nama_pelanggan', dataPelangganController.deleteDataPelanggan);


module.exports = router;
