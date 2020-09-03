const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            '^/api':{
                target:'mongodb+srv://<username>:<password>@boats.puv9y.mongodb.net/<dbname>?retryWrites=true&w=majority'
            }
        }
    }
}