import { Router } from 'express';
import { getProjectByID, getProjects } from '../controllers/projects.controller';

export const projectsRoutes = Router();

projectsRoutes.get('', getProjects);

projectsRoutes.get('/:id', getProjectByID);
