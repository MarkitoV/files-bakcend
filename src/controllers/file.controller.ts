import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

import Practice from '../models/Practice';

export async function getFiles(req: Request, res: Response): Promise<Response> {
  const files = await Practice.find();
  return res.json(files);
}

export async function getFile(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const file = await Practice.findById(id);
  return res.json(file);
}

export async function createFile(req: Request, res: Response): Promise<Response> {
  const { title, description, subjectCode, subjectName, numberLab, semester, docent, publishDate, deliveryDate, workingTime } = req.body;
  const newFile = {
    title,
    description,
    subjectCode,
    subjectName,
    numberLab,
    semester,
    docent,
    publishDate,
    deliveryDate,
    workingTime,
    filePath: req.file.path
  };
  const file = new Practice(newFile);
  await file.save();

  return res.json({
    message: 'File successfully saved',
    file
  });
}

export async function deleteFile(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const file = await Practice.findByIdAndRemove(id);
  // NOTE: this condition is for delete the file in the uploads folder
  if (file) {
    await fs.unlink(path.resolve(file.filePath));
  }
  return res.json({
    message: 'File successfully Deleted',
    file
  });
}

export async function updatedFile(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { title, description, subjectCode, subjectName, numberLab, semester, docent, publishDate, deliveryDate, workingTime } = req.body;
  const updatedFile = await Practice.findByIdAndUpdate(id, {
    title,
    description,
    subjectCode,
    subjectName,
    numberLab,
    semester,
    docent,
    publishDate,
    deliveryDate,
    workingTime
  }, { new: true });
  return res.json({
    message: 'File successfully updated',
    updatedFile
  });
}
// Typescript, Nodejs & MongoDB RestAPI y Subida de Imagenes
// 1:16:30