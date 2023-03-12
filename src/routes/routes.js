const express = require('express');
const { addClubController, getClubByIdController, getClubController, updateClubController, deleteClubController } = require('../controller/clubController');
const addImageMiddleware = require('../utils/middlewares/getImageMiddleware');
const router = express.Router();
const {validateCreate} = require('../utils/middlewares/validator')

router.get('/club', getClubController)
router.get('/club/:username', getClubByIdController)
router.put('/club/:username', updateClubController)
router.post('/club', validateCreate, addImageMiddleware, addClubController)
router.delete('/club/:username', deleteClubController)

module.exports = router;