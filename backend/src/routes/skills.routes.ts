import { Router } from 'express';
import { getSkills } from '../controllers/skills.controller';

export const skillsRoutes = Router();

skillsRoutes.get('', getSkills);
