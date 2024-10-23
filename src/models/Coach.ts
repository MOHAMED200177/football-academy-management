import mongoose from 'mongoose';

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

export default mongoose.model('Coach', CoachSchema);
