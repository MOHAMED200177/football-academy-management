const mongoose = require('mongoose');

const AcademySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    establishedDate: {
        type: Date,
        default: Date.now,
    },
    coaches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach',
    }],
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }],
});

module.exports = mongoose.model('Academy', AcademySchema);
