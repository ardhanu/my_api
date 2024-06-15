const express = require('express');
const diagnosaController = require('../controller/diagnosaController');

const router = express.Router();

router.post('/diagnosa', diagnosaController.createDiagnosa);
router.get('/diagnosa/:id', diagnosaController.getDiagnosa);

module.exports = router;
