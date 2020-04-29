import { Router } from 'express';

import { createFile, getFiles, getFile, deleteFile, updatedFile } from '../controllers/file.controller';
import multer from '../libs/multer';

const router = Router();

router.route('/files')
  .post(multer.single('file'),createFile)
  .get(getFiles);

router.route('/files/:id')
  .get(getFile)
  .delete(deleteFile)
  .put(updatedFile);

export default router;
