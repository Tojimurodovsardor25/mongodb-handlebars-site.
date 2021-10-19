const mongoose = require('mongoose');
const URI = 'mongodb+srv://mirzaabdullayev:GyeI0l6BlW34k7aR@adminpanel.3hbpu.mongodb.net/adminPanel'


module.exports = async () => {
    try {
        await mongoose.connect(URI);

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'Console error'))
        db.once('open', function () {
            console.log('MongoDB success connected');
        })

    } catch (error) {
        console.log(error);
    }
}
