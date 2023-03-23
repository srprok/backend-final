const axios = require('axios');

const addBreedMiddleware = async (req, res, next) => {
    const { breed } = req.body;

    //Convierte la cadena de texto a minúscula
    const minus = breed.toLowerCase()

    //Elimina los espacios
    const processedText = minus.replace(/\s+/g, '')

    const apiUrl = 'https://api.thedogapi.com/v1/breeds'
    const apiKey = 'live_U2lUVadLk2tlvCr7BJvK6fuwrlopzN0Vy3kD8kLyW91Yhj6IJp2kLS0BK6YDPUim'

    let coincidence = false

    const { data } = await axios.get(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    })

    for (x of data) {
       
        const breedName = x.name

        const minus2 = breedName.toLowerCase()
        const proText2 = minus2.replace(/\s+/g, '')

        if (processedText === proText2) {
            coincidence = true
            console.log(`Raza ${x.name} encontrada`)
            req.name = x.name
            return next();
        }
    }
    if(coincidence === false)
        res.status(400).send("Raza no encontrada")
        }

    module.exports = addBreedMiddleware;


