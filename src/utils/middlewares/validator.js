const { check } = require('express-validator');
const {validateResult} = require('../../helpers/validateHelper')

const validateCreate = [
    check('username')
        .exists()
        .not()
        .isEmpty(),
    check('password')
        .exists(),
    check('petname')
        .exists()
        .not()
        .isEmpty(),
    check('petage')
        .exists()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }