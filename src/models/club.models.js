const {model, Schema} = require ('mongoose');

const ClubSchema = new Schema({
    username: {
        type: String,
        required: [true, "Debe ingresar un nombre de usuario."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Debe ingresar una contraseña."]
    },
    userpremium: {type: Boolean},
    petname: {
        type: String,
        required: [true, "Debe ingresar una mascota."]
    },
    petage:{type: Number},
    kind: {type: String},
    breed: {type: String},
    picture: {type: String},
    created_at: {
        type: Date,
        default: Date.now}
})

const ClubModel = model("Club", ClubSchema);
module.exports = ClubModel;