import config from './config'
// const axios = require('axios');

function returnURL(api){
    return `${config.baseURL}${config.apis[api]}`
}

export {returnURL};