const express = require('express');
const { addClubController, getClubByIdController, getClubController, updateClubController, deleteClubController } = require('../controller/clubController');
const addBreedMiddleware = require('../utils/middlewares/addBreedMiddleware');
const router = express.Router();
const {validateCreate} = require('../utils/middlewares/validator')

router.get('/club', getClubController)
router.get('/club/:username', getClubByIdController)
router.put('/club/:username', updateClubController)
router.post('/club', validateCreate, addBreedMiddleware, addClubController)
router.delete('/club/:username', deleteClubController)

module.exports = router;