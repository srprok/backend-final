const ClubModel = require('../models/club.models');

const getClubByIdService = async (req) => {
    const { username } = req.params;
    return ClubModel.findOne({username});
}

module.exports = getClubByIdService;