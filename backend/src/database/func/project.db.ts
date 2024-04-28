import type { Database } from '../database';
import { Project, ProjectType } from '../models/project.model';

export function get_project(this: Database, id: string) : Promise<ProjectType | null> {
    return new Promise((resolve, reject) => {
        Project.findOne({id})
        .then((user) => resolve(user))
        .catch((err) => {
            console.error('[DB] [ERR]', err);
            reject();
        });
    });
}

export function get_projects(this: Database) : Promise<ProjectType[] | null> {
    return new Promise((resolve, reject) => {
        Project.find()
        .then((user) => resolve(user))
        .catch((err) => {
            console.error('[DB] [ERR]', err);
            reject();
        });
    });
}
