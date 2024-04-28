import { Router } from 'express';
import { Database } from '../database/database';

export const skillsRoutes = Router();

skillsRoutes.get('', (req, res) => {
    Database.skills.get()
    .then((skills) => res.status(200).json(skills))
    .catch(() => res.status(500));
});
