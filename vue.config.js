const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            '^/api':{
                target:'mongod://localhost:5000'
            }
        }
    }
}