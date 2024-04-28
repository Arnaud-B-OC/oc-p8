import { Router } from 'express';
import { Database } from '../database/database';

export const projectsRoutes = Router();

projectsRoutes.get('', (req, res) => {
    Database.project.get_all()
    .then((projects) => res.status(200).json(projects))
    .catch(() => res.status(500));
});

projectsRoutes.get('/:id', (req, res) => {
    Database.project.get(req.params.id)
    .then((project) => res.status(project ? 200 : 404).json(project ?? {}))
    .catch(() => res.status(500));
});
