import mongoose = require('mongoose');
import { get_project, get_projects } from './func/project.db';
import { get_skills } from './func/skill.db';
import { create_contact } from './func/contact.db';

export class Database {
    // ### Instance ### //
    protected static instance: Database;

    protected constructor() {
        if (!process.env.MONGODB_URL) {
            console.error('[ERR-DB] You need to provide a MONGODB_URL env var !')
            return;
        }

        mongoose.connect(process.env.MONGODB_URL, {dbName: 'portfolio'})
        .then(() => console.log('[DB] MongoDB connected !'))
        .catch((err) => console.error('[ERR-DB] Connection to MongoDB fail !', err));
    }

    public static get i() {
        if (!Database.instance) Database.instance = new Database();
        return Database.instance;
    }

    // ### Queries ### //
    public static project = {
        get: get_project.bind(this.i),
        get_all: get_projects.bind(this.i),
    }

    public static skills = {
        get: get_skills.bind(this.i),
    }
    
    public static contact = {
        create: create_contact.bind(this.i),
    }
}
