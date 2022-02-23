const mongoose = require('mongoose');
const URI = 'mongodb+srv://tojimuradov:aHUfjDfe7UQGaKLn@hbsmongodbmongoose.7vugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


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
