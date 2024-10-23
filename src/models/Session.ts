import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach',
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }],
});

export default mongoose.model('Session', SessionSchema);
