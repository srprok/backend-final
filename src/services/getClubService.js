const ClubModel = require('../models/club.models');

const getClubService = async (req) =>{
    return ClubModel.find();

}

module.exports = getClubService;