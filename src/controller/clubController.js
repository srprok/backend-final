const ClubModel = require('../models/club.models');
const addClubService = require('../services/addClubService');
const getClubService = require('../services/getClubService');
const getClubByIdService = require('../services/getClubByIdService');
const updateClubService = require('../services/updateClubService');
const deleteClubByIdService = require('../services/deleteClubService');

const getClubController = async (req, res) => {
    try {
        const club = await getClubService();
        res.json(club)  
    } catch (error) {
        console.log(error);     
        res.json({message: error.message})
    }    
}

const getClubByIdController = async (req, res) => {
    try {
        const club = await getClubByIdService(req);
        res.json(club)
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const addClubController = async (req, res) => {
    try {
        const addClub = await addClubService(req);
        res.status(201).json({message: `Creado el usuario ${addClub.username}`});
    } catch (error) {
        console.log(error);
        res.json({message:error.message});
    }    
}

const updateClubController = async (req, res) => {
    try {
        const updateClub = await updateClubService(req);
        res.status(200).json({message: `El usuario ${updateClub} ha sido modificado.`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const deleteClubController = async (req, res) => {
    try {
        const deleteClub = await deleteClubByIdService(req);
        res.json({message: `Usuario ${deleteClub} eliminado con éxito.`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message});
    }
}

module.exports = {getClubController, getClubByIdController ,addClubController, updateClubController, deleteClubController};