const express = require('express');
const dataPelangganController = require('../controller/dataPelangganController');

const router = express.Router();

router.get('/data_pelanggan', dataPelangganController.getAllDataPelanggan);
router.get('/data_pelanggan/search', dataPelangganController.searchDataPelanggan);
router.post('/data_pelanggan', dataPelangganController.createDataPelanggan);
router.patch('/data_pelanggan/:id', dataPelangganController.updateDataPelanggan);
router.delete('/data_pelanggan/:id', dataPelangganController.deleteDataPelanggan);


module.exports = router;
