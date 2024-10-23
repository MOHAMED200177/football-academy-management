import mongoose from 'mongoose';

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

export default mongoose.model('Schedule', ScheduleSchema);
