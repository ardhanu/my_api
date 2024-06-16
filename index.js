const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const gejalaRoutes = require("./src/routes/gejalaRoutes");
const kerusakanRoutes = require("./src/routes/kerusakanRoutes");
const DataPelanggan = require("./src/routes/dataPelangganRoutes");
const hasilDiagnosaRoutes = require("./src/routes/hasilDiagnosaRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(adminRoutes);
app.use(gejalaRoutes);
app.use(kerusakanRoutes);
app.use(DataPelanggan);
app.use(hasilDiagnosaRoutes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
