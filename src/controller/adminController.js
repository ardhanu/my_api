const Admin = require('../models/adminModel');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.login(username, password);
    if (!admin) {
      return res.status(401).send({ message: 'Username atau Password Salah!' });
    }
    res.send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};
