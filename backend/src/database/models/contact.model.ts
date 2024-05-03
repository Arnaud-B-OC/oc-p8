import mongoose, { Schema } from 'mongoose';

interface IContact extends mongoose.Document {
    name: string
    mail: string
    message: string
}

const ContactSchema : Schema = new Schema<IContact>({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    message: { type: String, required: true },
});

export const Contact = mongoose.model<IContact>('Contact', ContactSchema);
export type ContactType = (mongoose.Document<unknown, {}, IContact> & IContact & { _id: mongoose.Types.ObjectId });
