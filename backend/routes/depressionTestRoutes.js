const express = require('express');
const router = express.Router();
const { saveDepressionScore } = require('../services/saveDepressionTestScore');

router.post("/", async (req, res) => {
    const { email, score } = req.body;

    if (!email || score === undefined) {
        return res.status(400).json({ message: "Email and score are required" });
    }

    try {
        const updatedRecord = await saveDepressionScore(email, Number(score));
        res.status(200).json({ message: "Score saved successfully", data: updatedRecord });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
