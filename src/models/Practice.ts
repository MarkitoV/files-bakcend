import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  title: String,
  description: String,
  subjectCode: String,
  subjectName: String,
  numberLab: Number,
  semester: String,
  docent: String,
  publishDate: Date,
  deliveryDate: Date,
  workingTime: Number,
  filePath: String
});

interface IFile extends Document {
  title: string;
  description: string;
  subjectCode: string;
  subjectName: string;
  numberLab: number;
  semester: string;
  docent: string;
  publishDate: Date;
  deliveryDate: Date;
  workingTime: number;
  filePath: string
};

export default model<IFile>('File', schema);