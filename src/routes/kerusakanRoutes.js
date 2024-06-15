const express = require('express');
const kerusakanController = require('../controller/kerusakanController');

const router = express.Router();

router.get('/kerusakan', kerusakanController.getAllKerusakan);
router.get('/kerusakan/:id', kerusakanController.getKerusakanById);
router.post('/kerusakan', kerusakanController.createKerusakan);
router.patch('/kerusakan/:id', kerusakanController.updateKerusakan);
router.delete('/kerusakan/:id', kerusakanController.deleteKerusakan);



module.exports = router;
