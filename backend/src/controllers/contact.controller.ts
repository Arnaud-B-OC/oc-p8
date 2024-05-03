import { RequestHandler } from 'express';
import { Database } from '../database/database';

export const contactController : RequestHandler = (req, res) => {
    if (!req.body.name) return res.status(400).json({err: 'Need a name'});
    if (!req.body.mail) return res.status(400).json({err: 'Need a mail'});
    if (!req.body.message) return res.status(400).json({err: 'Need a message'});
    
    Database.contact.create({
        name: req.body.name,
        mail: req.body.mail,
        message: req.body.message
    })
    .then(() => res.status(200).json({msg: 'Success'}))
    .catch(() => res.status(500));
}
