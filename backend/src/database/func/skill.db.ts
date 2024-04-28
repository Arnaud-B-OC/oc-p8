import type { Database } from '../database';
import { Skill, SkillType } from '../models/skill.model';

export function get_skills(this: Database) : Promise<SkillType[] | null> {
    return new Promise((resolve, reject) => {
        Skill.find()
        .then((skill) => resolve(skill))
        .catch((err) => {
            console.error('[DB] [ERR]', err);
            reject();
        });
    });
}
