const ClubModel = require('../models/club.models');

const addClubService = async (req) => {
    const club = req.body;
    const newClub = new ClubModel(club);
    await newClub.save();
    return club;
}

module.exports = addClubService;