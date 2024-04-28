import mongoose, { Schema } from 'mongoose';

interface IProject extends mongoose.Document {
    id: string
    title: string
    preview: string
    about: string
    githubLink: string
    websiteLink: string
    image: string
}

const ProjectSchema : Schema = new Schema<IProject>({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    preview: { type: String, required: true },
    about: { type: String, required: true },
    githubLink: { type: String, required: true },
    websiteLink: { type: String, required: true },
    image: { type: String, required: true },
});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
export type ProjectType = (mongoose.Document<unknown, {}, IProject> & IProject & { _id: mongoose.Types.ObjectId });
