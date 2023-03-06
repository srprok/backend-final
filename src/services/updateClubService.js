const ClubModel = require('../models/club.models');

const updateClubService = async (req) => {
    const  { username } = req.params;
    const club = req.body;
    const updateClub = await ClubModel.findOne({ username })
    updateClub.username = club.username;
    updateClub.password = club.password;

    await updateClub.save();
    return updateClub.username;
}

module.exports = updateClubService;