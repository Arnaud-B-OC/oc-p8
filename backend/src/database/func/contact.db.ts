import { Database } from '../database';
import { Contact } from '../models/contact.model';

export function create_contact(this: Database, options: IContactOptions) : Promise<void> {
    return new Promise((resolve, reject) => {
        new Contact(options).save().then(() => resolve()).catch((err) => {
            console.error('[DB] [ERR]', err);
            reject();
        });
    });
}
