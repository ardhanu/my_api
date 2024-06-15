const express = require('express');
const gejalaController = require('../controller/gejalaController');

const router = express.Router();

router.get('/gejala', gejalaController.getAllGejala);
router.post('/gejala', gejalaController.createGejala);
router.patch('/gejala/:id', gejalaController.updateGejala);
router.delete('/gejala/:id', gejalaController.deleteGejala);



module.exports = router;
