const mongoose = require('mongoose');
const colors = require('colors/safe')

exports.connectDB = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://velan:velanpassword@cluster0-iuu9g.mongodb.net/test?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
        console.log(`Database connected successfully`)
    } catch (err) {
        throw err
    }
}