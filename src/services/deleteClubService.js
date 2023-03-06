const ClubModel = require('../models/club.models');

const deleteClubByIdService = async (req) => {
    const { username } = req.params;
    const response = await ClubModel.deleteOne({username: username});
    if(response.deletedCount === 0) throw new Error(`El usuario ${username} no fue encontrado.`);
    return username;
}

module.exports = deleteClubByIdService;