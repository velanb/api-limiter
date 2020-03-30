const mongoose = require('mongoose')
const Schema = new mongoose.Schema

let ClientSchema = new Schema({
    // userId: {
    //     type: Number,
    //     required: true
    // },
    clientId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    apiLimit: {
        type: Object,
        required: true
    },
    token: {
        type: String,
        default: null
    },
    activeTokenStatus: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('ClientSchema', ClientSchema)