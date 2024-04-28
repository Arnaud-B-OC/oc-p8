import path = require('path');
import express = require('express');
import mongoSanitize = require('express-mongo-sanitize');
import { projectsRoutes } from './routes/projects.route';
import { skillsRoutes } from './routes/skills.routes';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    console.log(`[${req.method}] ${req.url}`);

    next();
});

app.use(express.json(), mongoSanitize());

// ### API Routes ### //
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);

// ### Redir All To index.html ### //
app.use(express.static('build'));
app.get('*', (req, res) => res.sendFile('build/index.html', {root: path.join(__dirname, '..')}));

export default app;
