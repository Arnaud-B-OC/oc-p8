import mongoose, { Schema } from 'mongoose';

interface ISkill extends mongoose.Document {
    alt: string
    url: string
}

const SkillSchema : Schema = new Schema<ISkill>({
    alt: { type: String, required: true,unique: true },
    url: { type: String, required: true }
});

export const Skill = mongoose.model<ISkill>('Skill', SkillSchema);
export type SkillType = (mongoose.Document<unknown, {}, ISkill> & ISkill & { _id: mongoose.Types.ObjectId });
