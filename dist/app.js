"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const file_routes_1 = __importDefault(require("./routes/file.routes"));
// initializations
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// routes
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});
app.use('/api', file_routes_1.default);
// this folder for this application will be used to store public files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
// Typescript Nodejs Mongodb REST API con Passport
