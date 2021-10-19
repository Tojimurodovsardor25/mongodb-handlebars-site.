const mongoose = require('mongoose')

// const codeS = 'fCVjcmrZwdQMX9tC'
const uri = 'mongodb+srv://tojimuradov:fCVjcmrZwdQMX9tC@hbsmongodbmongoose.7vugm.mongodb.net/hbsMongoDBMongoose'

module.exports = async () => {
    try {
        await mongoose.connect(uri);
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'Console error'))
        db.once('open', function () {
            console.log('MongoDB success connected');
        })
    } catch (error) {
        console.log(error);
    }
}

