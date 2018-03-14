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
    constructor(courseId, data = {}) {
        this.courseId = courseId;
        this.page = null;
        this.state = data ? interfaces_1.PageState.Fresh : interfaces_1.PageState.Empty;
        this.data = {
            url: data.url || null,
            title: data.title || 'Untitled Page',
            body: data.body || null,
            published: data.published || false,
            front_page: data.front_page || false
        };
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
                this.data.url = this.page.url,
                    this.data.title = this.page.title,
                    this.data.body = this.page.body,
                    this.data.published = this.page.published,
                    this.data.front_page = this.page.front_page;
            }
            catch (e) {
                err = e;
            }
            return new Promise((resolve, reject) => err ? reject(err) : resolve(this));
        });
    }
    get() {
        return {
            url: this.data.url,
            title: this.data.title,
            body: this.data.body,
            published: this.data.published,
            front_page: this.data.front_page
        };
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let err = null;
            try {
                this.page = yield PageAPI.update(this.courseId, this.get());
                this.state = interfaces_1.PageState.Fresh;
            }
            catch (e) {
                err = e;
            }
            return new Promise((resolve, reject) => err ? reject(err) : resolve(this));
        });
    }
    /* Accessors */
    get url() {
        return this.data.url;
    }
    set url(value) {
        throw new Error(`Cannot manually set URL.`);
    }
    get title() {
        return this.data.title;
    }
    set title(value) {
        if (typeof value !== 'string') {
            throw new Error(`Cannot set title to ${typeof value}. Expects string.`);
        }
        this.data.title = value;
    }
    get body() {
        return this.data.body ? this.data.body : '';
    }
    set body(value) {
        if (typeof value !== 'string') {
            throw new Error(`Cannot set body to ${typeof value}. Expects string.`);
        }
        this.data.body = value;
    }
    get published() {
        return this.data.published;
    }
    set published(value) {
        if (typeof value !== 'boolean') {
            throw new Error(`Cannot set published to ${typeof value}. Expects boolean.`);
        }
        this.data.published = value;
    }
    get frontPage() {
        return this.data.front_page;
    }
    set frontPage(value) {
        if (typeof value !== 'boolean') {
            throw new Error(`Cannot set frontPage to ${typeof value}. Expects boolean.`);
        }
        this.data.front_page = value;
    }
}
exports.default = CanvasPage;
//# sourceMappingURL=page.js.map