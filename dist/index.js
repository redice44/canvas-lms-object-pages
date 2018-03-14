"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PageAPI = require("@redice44/canvas-lms-promise-pages");
const page_1 = require("./page");
exports.newPage = (courseId, data = {}) => new page_1.default(courseId, data);
exports.fetchPage = (courseId, pageUrl) => new page_1.default(courseId).fetch(pageUrl);
exports.fetchPages = (courseId, listOptions = {}) => __awaiter(this, void 0, void 0, function* () {
    return Promise.all((yield PageAPI.list(courseId, listOptions)).map(page => exports.fetchPage(courseId, page.url)));
});
//# sourceMappingURL=index.js.map