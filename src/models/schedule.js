const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    academy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academy',
        required: true,
    },
    sessions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
    }],
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
