const express = require('express');
const { addClubController, getClubByIdController, getClubController, updateClubController, deleteClubController } = require('../controller/clubController');
const router = express.Router();
const {validateCreate} = require('../utils/validator')

router.get('/club', getClubController)
router.get('/club/:username', getClubByIdController)
router.put('/club/:username', updateClubController)
router.post('/club', validateCreate, addClubController)
router.delete('/club/:username', deleteClubController)

module.exports = router;