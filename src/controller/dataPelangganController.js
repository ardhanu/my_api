const DataPelanggan = require("../models/dataPelangganModel");

exports.createDataPelanggan = async (req, res) => {
	try {
		const { id_pelanggan, nama_pelanggan, alamat, no_telp } = req.body;
		await DataPelanggan.createDataPelanggan({ id_pelanggan, nama_pelanggan, alamat, no_telp });
		res.status(201).json({ message: "Data Pelanggan created successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateDataPelanggan = async (req, res) => {
    try {
        const { nama_pelanggan, alamat, no_telp } = req.body;
        const { id_pelanggan } = req.params;

        if (!nama_pelanggan || !alamat || !no_telp) {
            return res.status(400).send({ message: 'Missing required fields: nama_pelanggan, alamat, no_telp' });
        }

        await DataPelanggan.updateDataPelanggan({ id_pelanggan, nama_pelanggan, alamat, no_telp });
        res.send({ message: "Data Pelanggan updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

exports.deleteDataPelanggan = async (req, res) => {
    try {
        const { nama_pelanggan } = req.params;
        console.log(`Received nama_pelanggan: ${nama_pelanggan}`); // Logging
        if (!nama_pelanggan) {
            return res.status(400).send({ message: "Nama pelanggan tidak diberikan" });
        }
        await DataPelanggan.deleteDataPelanggan(nama_pelanggan);
        res.send({ message: "Data Pelanggan deleted successfully" });
    } catch (error) {
        console.error(`Error deleting pelanggan: `, error); // Logging
        res.status(500).send(error);
    }
};


exports.getPelangganById = async (req, res) => {
    try {
        const { id_pelanggan } = req.params;
        const pelanggan = await DataPelanggan.getPelangganById(id_pelanggan);

        if (pelanggan) {
            res.send(pelanggan);
        } else {
            res.status(404).send({ message: "Pelanggan not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.getAllDataPelanggan = async (req, res) => {
	try {
		const [dataPelanggan] = await DataPelanggan.getAllDataPelanggan();
		res.json(dataPelanggan);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.searchDataPelanggan = async (req, res) => {
	try {
		const { query } = req.query;
		const [dataPelanggan] = await DataPelanggan.searchDataPelanggan(query);
		res.json(dataPelanggan);
	} catch (error) {
		res.status(500).send(error);
	}
};
