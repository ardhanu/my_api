const HasilDiagnosa = require("../models/hasilDiagnosaModel");

exports.createHasilDiagnosa = async (req, res) => {
	try {
		const { tanggal, nama_pelanggan, kerusakan_1, kerusakan_2, kerusakan_3 } = req.body;
		await HasilDiagnosa.createHasilDiagnosa({
			tanggal,
			nama_pelanggan,
			kerusakan_1,
			kerusakan_2,
			kerusakan_3,
		});
		res.status(201).json({ message: "Hasil diagnosa created successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.createDetailHasilDiagnosa = async (req, res) => {
	console.log("Request body: ", req.body);
	try {
		const {
			nama_pelanggan,
			tanggal,
			kerusakan_1,
			kerusakan_2,
			kerusakan_3,
			solusi_1,
			solusi_2,
			solusi_3,
			penjelasan_1,
			penjelasan_2,
			penjelasan_3,
		} = req.body;
		await HasilDiagnosa.createDetailHasilDiagnosa({
			nama_pelanggan,
			tanggal,
			kerusakan_1,
			kerusakan_2,
			kerusakan_3,
			solusi_1,
			solusi_2,
			solusi_3,
			penjelasan_1,
			penjelasan_2,
			penjelasan_3,
		});
		res.status(201).json({ message: "Detail hasil diagnosa created successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteHasilDiagnosa = async (req, res) => {
	try {
		await HasilDiagnosa.deleteHasilDiagnosa(req.params.nama_pelanggan);
		res.status(200).json({ message: "Hasil diagnosa deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAllHasilDiagnosa = async (req, res) => {
	try {
		const [hasilDiagnosa] = await HasilDiagnosa.getAllHasilDiagnosa();
		res.status(200).json(hasilDiagnosa);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAllDetailDiagnosa = async (req, res) => {
    try {
        const hasilDiagnosa = await HasilDiagnosa.getAllDetailDiagnosa();
        if (!Array.isArray(hasilDiagnosa)) {
            console.error('Expected an array from HasilDiagnosa.getAllDetailDiagnosa, got:', hasilDiagnosa);
            return res.status(500).json({ error: 'Unexpected server error' });
        }
        res.status(200).json(hasilDiagnosa[0]);
    } catch (error) {
        console.error('Error in getAllDetailDiagnosa:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.searchHasilDiagnosa = async (req, res) => {
	try {
		const { query } = req.query;
		const [hasilDiagnosa] = await HasilDiagnosa.searchHasilDiagnosa(query);
		res.json(hasilDiagnosa);
	} catch (error) {
		res.status(500).send(error);
	}
};
