"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const file_controller_1 = require("../controllers/file.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = express_1.Router();
router.route('/files')
    .post(multer_1.default.single('file'), file_controller_1.createFile)
    .get(file_controller_1.getFiles);
router.route('/files/:id')
    .get(file_controller_1.getFile)
    .delete(file_controller_1.deleteFile)
    .put(file_controller_1.updatedFile);
exports.default = router;
