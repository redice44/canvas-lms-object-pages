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
const interfaces_1 = require("./interfaces");
class CanvasPage {
    constructor(courseId, data = null) {
        this.courseId = courseId;
        this.data = data;
        this.page = null;
        this.state = data ? interfaces_1.PageState.Fresh : interfaces_1.PageState.Empty;
    }
    del() {
        return __awaiter(this, void 0, void 0, function* () {
            let err = null;
            try {
                this.page = yield PageAPI.del(this.courseId, this.page.url);
                this.state = interfaces_1.PageState.Deleted;
            }
            catch (e) {
                err = e;
            }
            return new Promise((resolve, reject) => err ? reject(err) : resolve(this));
        });
    }
    fetch(pageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let err = null;
            try {
                this.page = yield PageAPI.get(this.courseId, pageUrl);
                this.state = interfaces_1.PageState.Fresh;
                this.data = {
                    url: this.page.url,
                    title: this.page.title,
                    body: this.page.body,
                    published: this.page.published,
                    front_page: this.page.front_page
                };
            }
            catch (e) {
                err = e;
            }
            return new Promise((resolve, reject) => err ? reject(err) : resolve(this));
        });
    }
    get() {
        return this.data;
    }
    update(pageData) {
        this.state = interfaces_1.PageState.Updated;
        this.data = pageData;
        return this;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let err = null;
            try {
                this.page = yield PageAPI.update(this.courseId, this.data);
                this.state = interfaces_1.PageState.Fresh;
            }
            catch (e) {
                err = e;
            }
            return new Promise((resolve, reject) => err ? reject(err) : resolve(this));
        });
    }
}
exports.default = CanvasPage;
//# sourceMappingURL=index.js.map