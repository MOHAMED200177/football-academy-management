const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    academy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academy',
    },
});

module.exports = mongoose.model('Player', PlayerSchema);
