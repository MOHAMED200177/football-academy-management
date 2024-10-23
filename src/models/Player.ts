import mongoose from 'mongoose';

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

export default mongoose.model('Player', PlayerSchema);
