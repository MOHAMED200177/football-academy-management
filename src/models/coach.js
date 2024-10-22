const mongoose = require('mongoose');

const CoachSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    academy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academy',
    },
});

module.exports = mongoose.model('Coach', CoachSchema);
