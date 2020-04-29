"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
;
exports.default = mongoose_1.model('File', schema);
