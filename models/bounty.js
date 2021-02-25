// Require Mongoose
const mongoose = require('mongoose');

// Create the bounty Schema
const bountySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    ship: String,
    reward: {
        type: Number,
        default: 10000
    },
    hunters: [String],
    captured: {
        type: Boolean,
        default: false
    },
    lastSeen: String
});

module.exports = mongoose.model('Bounty', bountySchema);