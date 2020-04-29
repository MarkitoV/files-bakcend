import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import fileRoutes from './routes/file.routes';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`The API is at http://localhost:${app.get('port')}`);
});

app.use('/api', fileRoutes);

// this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;

// Typescript Nodejs Mongodb REST API con Passport