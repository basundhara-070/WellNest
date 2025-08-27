const UserScore = require('../models/UserScores');

async function saveDepressionScore(email, score) {
    if (!email || score === undefined) {
        throw new Error("Email and score are required");
    }

    try {
        const updatedRecord = await UserScore.findOneAndUpdate(
            { email },                            
            { $set: { depressionScore: score } },  
            { upsert: true, new: true }           
        );
        return updatedRecord;
    } catch (err) {
        console.error(err);
        throw new Error("Database error");
    }
}

module.exports = { saveDepressionScore };
