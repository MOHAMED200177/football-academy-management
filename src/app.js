const express = require('express');

// const academyRoutes = require('./routes/academy');
// const coachRoutes = require('./routes/coachRoutes');
// const playerRoutes = require('./routes/playerRoutes');
// const scheduleRoutes = require('./routes/scheduleRoutes');
// const sessionRoutes = require('./routes/sessionRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.use('/api/academies', academyRoutes);
// app.use('/api/coaches', coachRoutes);
// app.use('/api/players', playerRoutes);
// app.use('/api/schedules', scheduleRoutes);
// app.use('/api/sessions', sessionRoutes);

module.exports = app;
