import multer from 'multer';
// import uuid from 'uuid/v4'; // <== NOTE: NOW DEPRECATED!
import { v4 as uuid } from 'uuid';
import path from "path";

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

export default multer({ storage });