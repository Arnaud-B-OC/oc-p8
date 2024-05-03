import { RequestHandler } from 'express';
import { Database } from '../database/database';

export const getSkills : RequestHandler = (req, res) => {
    Database.skills.get()
    .then((skills) => res.status(200).json(skills))
    .catch(() => res.status(500));
}
