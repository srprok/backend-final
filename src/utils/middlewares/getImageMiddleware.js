const axios = require('axios')

const addImageMiddleware = async (req, res, next) => {
     const { data } = await axios.get('https://dog.ceo/api/breed/hound/images');
    
    req.message = data.message[0]
    return next();

}

module.exports = addImageMiddleware;