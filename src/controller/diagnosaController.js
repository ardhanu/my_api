const Diagnosa = require('../models/diagnosaModel');

exports.createDiagnosa = async (req, res) => {
  try {
    const id = await Diagnosa.createDiagnosa(req.body);
    res.status(201).send({ id });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getDiagnosa = async (req, res) => {
  try {
    const diagnosa = await Diagnosa.getDiagnosa(req.params.id);
    if (!diagnosa) {
      return res.status(404).send();
    }
    res.send(diagnosa);
  } catch (error) {
    res.status(500).send(error);
  }
};
