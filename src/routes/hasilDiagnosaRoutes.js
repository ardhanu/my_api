const express = require('express');
const hasilDiagnosaController = require('../controller/hasilDiagnosaController');

const router = express.Router();

router.get('/hasil-diagnosa', hasilDiagnosaController.getAllHasilDiagnosa);
router.get('/hasil-diagnosa/search', hasilDiagnosaController.searchHasilDiagnosa);
router.post('/hasil-diagnosa', hasilDiagnosaController.createHasilDiagnosa);
router.delete('/hasil-diagnosa/:nama_pelanggan', hasilDiagnosaController.deleteHasilDiagnosa);

module.exports = router;
