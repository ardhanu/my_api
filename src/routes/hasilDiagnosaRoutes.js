const express = require("express");
const hasilDiagnosaController = require("../controller/hasilDiagnosaController");

const router = express.Router();

router.get("/hasil-diagnosa", hasilDiagnosaController.getAllHasilDiagnosa);
router.get("/hasil-diagnosa/search", hasilDiagnosaController.searchHasilDiagnosa);
router.post("/hasil-diagnosa/detail", hasilDiagnosaController.createDetailHasilDiagnosa);
router.post("/hasil-diagnosa/tambah", hasilDiagnosaController.createHasilDiagnosa);
router.delete("/hasil-diagnosa/:nama_pelanggan", hasilDiagnosaController.deleteHasilDiagnosa);
router.get("/hasil-diagnosa/detail", hasilDiagnosaController.getAllDetailDiagnosa);

module.exports = router;
