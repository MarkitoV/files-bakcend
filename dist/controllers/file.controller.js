"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Practice_1 = __importDefault(require("../models/Practice"));
function getFiles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield Practice_1.default.find();
        return res.json(files);
    });
}
exports.getFiles = getFiles;
function getFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const file = yield Practice_1.default.findById(id);
        return res.json(file);
    });
}
exports.getFile = getFile;
function createFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const file = new Practice_1.default(newFile);
        yield file.save();
        return res.json({
            message: 'File successfully saved',
            file
        });
    });
}
exports.createFile = createFile;
function deleteFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const file = yield Practice_1.default.findByIdAndRemove(id);
        // NOTE: this condition is for delete the file in the uploads folder
        if (file) {
            yield fs_extra_1.default.unlink(path_1.default.resolve(file.filePath));
        }
        return res.json({
            message: 'File successfully Deleted',
            file
        });
    });
}
exports.deleteFile = deleteFile;
function updatedFile(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { title, description, subjectCode, subjectName, numberLab, semester, docent, publishDate, deliveryDate, workingTime } = req.body;
        const updatedFile = yield Practice_1.default.findByIdAndUpdate(id, {
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
    });
}
exports.updatedFile = updatedFile;
// Typescript, Nodejs & MongoDB RestAPI y Subida de Imagenes
// 1:16:30
