//Uso de express validator

const { check } = require('express-validator');
const {validateResult} = require('../../helpers/validateHelper')

const validateCreate = [
    check('username')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Debe ingresar un nombre de usuario'),
    check('password')
        .exists()
        .isStrongPassword({
            minLength:8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers:1,
            minSymbols: 1
        }).withMessage('La contraseña debe contener como mínimo 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo.'),
    check('petname')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Debe ingresar el nombre de su mascota')
        .matches(/^[A-Za-z\s]+$/).withMessage('Ingrese solo letras.'),
    check('petage')
        .exists()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }