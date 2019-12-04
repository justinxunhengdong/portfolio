(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <span class=\"row\">\n\n    <div class=\"col-sm-4 img-wrapper\">\n      <img src=\"./../assets/img/about/profile.png\">\n    </div>\n\n<article class=\"col-sm-8\">\n<h1>G'day - I'm Justin!</h1>\n\n<p>I'm a recent Bachelor of Information Technology (User Experience Design)\n   graduate from the University of Queensland, Australia. I also studied as an exchange student\n  at Purdue University, where I was heavily involved in the Game Development faculty. I was a member of\n  several clubs and societies, including UQ Design Society, Purdue's SIGGRAPH chapter, Asian American Association, and\n  Purdue Game Developers United.\n</p>\n\n<p>Right now I work at the Australian Taxation Office as a full-time web developer,\n  conducting development and testing for ATOOnline. I have also been involved and exposed to other\n  topics such as automation testing, while serving as a proxy Scrum Master and team UX champion.\n  This has given me first-hand experience of how development is conducted in a large, professional organisation.</p>\n\n<p>I've also worked in several areas inside and around user experience design, such as physical computing\n  and social/mobile computing, as well as other areas game design and development, technical art, film editing and 3D modelling.\n  Human-computer interaction has always fascinated me - I love to learn about how so much we take for granted in software is manipulated\n  by seemingly minor changes in hardware, user interface, visuals or architecture.\n  I have most recently been fascinated with 3D level design from both a user experience and game development standpoint,\n  and how the manipulation of composition, colour and lighting can be used to convey tone, theme, gameplay or story.</p>\n\n<p>\n  As I've worked in such a variety of problem areas, I believe I have the experience and adaptability to bring value to any organisation.\n  I devote much of my spare time outside of work to learning and development, whether that be learning Angular and UI programming,\n  working on my roleplaying game <i>At the Edge of the West</i>, or working through my large backlog of GDC talks.\n</p>\n\n\n<span id=\"button-links\">\n<a routerLink=\"/projects\" class=\"btn btn-dark\">Projects</a>\n<a routerLink=\"/projects\" class=\"btn btn-dark\">Contact</a>\n</span>\n</article>\n</span>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-dong-header></app-dong-header>\r\n\r\n<div [@slide] = \"outlet.isActivated ? outlet.activatedRoute : ''\" id=\"outlet-wrapper\">\r\n<router-outlet #outlet = outlet id=\"outlet\"></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chip-filter/chip-filter.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chip-filter/chip-filter.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>chip-filter works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-tileset/content-tileset.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content-tileset/content-tileset.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Overlay-->\n<div id=\"overlay\" *ngIf=\"shouldShowModal\" class=\"container-fluid\">\n  <article class=\"row\">\n    <div\n      markdown\n      [src]=\"currentlySelected.postLocation\"\n      id=\"markdown-container\"\n      class=\"col-md-8\"\n    >\n      Loading Content...\n    </div>\n  </article>\n  <span class=\"row\">\n      <span class=\"button-wrapper col-md-8\">\n        <button (click)=\"deselectContent()\" class=\"btn btn-light\">\n          Close Content\n        </button>\n        <a (click)=\"getNextContentLocation()\"\n          ><button class=\"btn btn-light\">Next</button></a\n        >\n      </span>\n    </span>\n\n\n</div>\n\n<div class=\"container-wrapper\">\n  <!--Tile Template-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <a\n        *ngFor=\"let content of contentsAll\"\n        (click)=\"selectContent(content)\"\n        class=\"col-md-4 tile\"\n      >\n        <div class=\"tile-media-wrapper\">\n          <img\n            [src]=\"content.img\"\n            class=\"thumbnail\"\n            [attr.alt]=\"content.title + ' thumbnail'\"\n          />\n          <caption class=\"filter-wrapper\">\n            <h4 class=\"content-title\">{{ content.title }}</h4>\n            <span\n              class=\"filters\"\n              *ngFor=\"let filter of returnCorrespondingFilters(content)\"\n            >\n              <div class=\"chip\">{{ filter }}</div>\n            </span>\n          </caption>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dong-header/dong-header.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dong-header/dong-header.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header id=\"header-wrapper\" [ngClass]='headerStatus' class=\"container-fluid\">\n<!--<button (click)='changeHeaderStatus(!isOpen)'></button>-->\n<span class=\"row\">\n\n<span class=\"header-text-wrapper col-md-12\">\n<h1 class=\"decorator-font\"><a routerLink = \"/\">justin.dong</a></h1>\n<section class=\"col-md-12   description-text\">\n<h2 *ngIf=\"isOpen\">I use both <i style=\"color: rgb(255, 90, 95)\">technical</i> and\n  <i style=\"color: rgb(86, 153, 27)\">design</i> skills to bring <b>meaningful solutions</b> to <b>complex problems.</b></h2>\n</section>\n<app-dong-router class=\"col-md-12\"></app-dong-router>\n</span>\n\n<!--Router goes here:\nAbout Me\nProjects search\nContact\n---\nPrototypes\nBlog\n---\nOther links\n\nRouter collapses into a hamburger menu on -md-\n-->\n</span>\n\n</header>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dong-router/dong-router.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dong-router/dong-router.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\" class=\"navbar navbar-expand-md\">\n  <button\n    id=\"navbar-button\"\n    class=\"navbar-toggler btn btn-light\"\n    type=\"button\"\n    (click)=\"toggleNavbar()\"\n  >\n    <img src=\"./assets/img/icon/menu_icon.png\" />\n  </button>\n\n  <div\n    class=\"collapse navbar-collapse\"\n    [ngClass]=\"{\n      show: navbarOpen\n    }\"\n  >\n    <nav class=\"navbar-nav\">\n      <a routerLink=\"/about\" class=\"nav-item btn btn-dark\">About Me</a>\n      <a routerLink=\"/projects\" class=\"nav-item btn btn-dark\">Projects</a>\n    </nav>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about-me/about-me.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/about-me/about-me.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\r\n  padding-top: 50px;\r\n  padding-bottom: 150px;\r\n}\r\n\r\n.img-wrapper img{\r\n  /* position: absolute; */\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 300px;\r\n  margin: auto;\r\n}\r\n\r\n.img-wrapper{\r\n\r\n}\r\n\r\n.btn {\r\n  margin: 0px 2px;\r\n}\r\n\r\n#button-links{\r\n  height: auto;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG59XHJcblxyXG4uaW1nLXdyYXBwZXIgaW1ne1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlcntcclxuXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbjogMHB4IDJweDtcclxufVxyXG5cclxuI2J1dHRvbi1saW5rc3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/about-me/about-me.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/about-me/about-me.component.ts ***!
          \************************************************/
        /*! exports provided: AboutMeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () { return AboutMeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutMeComponent = /** @class */ (function () {
                function AboutMeComponent() {
                }
                AboutMeComponent.prototype.ngOnInit = function () {
                };
                return AboutMeComponent;
            }());
            AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about-me',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")).default]
                })
            ], AboutMeComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
            /* harmony import */ var app_content_tileset_content_tileset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/content-tileset/content-tileset.component */ "./src/app/content-tileset/content-tileset.component.ts");
            var routes = [
                { path: '', children: [] },
                { path: 'about', component: app_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"] },
                { path: 'projects', component: app_content_tileset_content_tileset_component__WEBPACK_IMPORTED_MODULE_4__["ContentTilesetComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-dong-header{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  display: block;\r\n  z-index: 5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixjQUFjO0VBQ2QsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZG9uZy1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ "./node_modules/ng-animate/fesm2015/ng-animate.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'portfolio';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slide', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["slideInLeft"], {
                                    params: { timing: 0.3 }
                                })
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_3__["slideInRight"], {
                                    params: { timing: 0.3 }
                                })
                            ])
                        ])
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _dong_header_dong_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dong-header/dong-header.component */ "./src/app/dong-header/dong-header.component.ts");
            /* harmony import */ var _dong_router_dong_router_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dong-router/dong-router.component */ "./src/app/dong-router/dong-router.component.ts");
            /* harmony import */ var _chip_filter_chip_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chip-filter/chip-filter.component */ "./src/app/chip-filter/chip-filter.component.ts");
            /* harmony import */ var _content_tileset_content_tileset_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-tileset/content-tileset.component */ "./src/app/content-tileset/content-tileset.component.ts");
            /* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
            //Angular
            //Packages
            //Custom Components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _dong_header_dong_header_component__WEBPACK_IMPORTED_MODULE_9__["DongHeaderComponent"],
                        _chip_filter_chip_filter_component__WEBPACK_IMPORTED_MODULE_11__["ChipFilterComponent"],
                        _content_tileset_content_tileset_component__WEBPACK_IMPORTED_MODULE_12__["ContentTilesetComponent"],
                        _dong_router_dong_router_component__WEBPACK_IMPORTED_MODULE_10__["DongRouterComponent"],
                        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_13__["AboutMeComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }),
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/chip-filter/chip-filter.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/chip-filter/chip-filter.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaXAtZmlsdGVyL2NoaXAtZmlsdGVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/chip-filter/chip-filter.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/chip-filter/chip-filter.component.ts ***!
          \******************************************************/
        /*! exports provided: ChipFilterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipFilterComponent", function () { return ChipFilterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ChipFilterComponent = /** @class */ (function () {
                function ChipFilterComponent() {
                }
                ChipFilterComponent.prototype.ngOnInit = function () {
                };
                return ChipFilterComponent;
            }());
            ChipFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chip-filter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chip-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chip-filter/chip-filter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chip-filter.component.css */ "./src/app/chip-filter/chip-filter.component.css")).default]
                })
            ], ChipFilterComponent);
            /***/ 
        }),
        /***/ "./src/app/content-tileset/content-tileset.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/content-tileset/content-tileset.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#overlay{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n  transition: display 0.2s;\r\n  background-color: var(--colour-black-08);\r\n  padding-top: 80px;\r\n}\r\n\r\n#overlay #markdown-container{\r\n  display: block;\r\n  margin: auto;\r\n  padding: 40px 30px;\r\n  min-height: 50vh;\r\n  max-height: 70vh;\r\n  background-color: var(--colour-white);\r\n  overflow-y: auto;\r\n  -webkit-filter: blur(15);\r\n          filter: blur(15);\r\n}\r\n\r\n#overlay #markdown-container::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n/* Track */\r\n\r\n#overlay #markdown-container::-webkit-scrollbar-track {\r\n  background: var(--colour-black-05);\r\n}\r\n\r\n/* Handle */\r\n\r\n#overlay #markdown-container::-webkit-scrollbar-thumb {\r\n  background: var(--colour-main);\r\n  border: 1px solid var(--colour-black);\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n#overlay #markdown-container::-webkit-scrollbar-thumb:hover {\r\n  background: var(--colour-main-08);\r\n}\r\n\r\n#overlay * {\r\n  color: var(--colour-black);\r\n}\r\n\r\n#overlay .button-wrapper .btn{\r\n  color: var(--colour-black);\r\n  margin: 0px 5px;\r\n\r\n}\r\n\r\n#overlay .button-wrapper{\r\n  display: block;\r\n  margin: auto;\r\n  margin-bottom: 150px;\r\n  padding: 15px;\r\n  background-color: var(--colour-black);\r\n}\r\n\r\n.container-wrapper{\r\n  background-color: var(--colour-white);\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.tile {\r\n  display: inline-block;\r\n  position: relative;\r\n  min-height: 150px;\r\n  height: 250px;\r\n  max-height: 30vh;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  transition: padding 0.1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.tile:hover{\r\n  padding: 13px;\r\n}\r\n\r\n.tile-media-wrapper{\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  border: 1px solid black;\r\n}\r\n\r\n.tile-media-wrapper:hover{\r\n  box-shadow: 0px 1px 2px var(--colour-black-05);\r\n  transition: box-shadow 0.5s;\r\n}\r\n\r\n.thumbnail{\r\n  min-height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  position: absolute;\r\n  transition: -webkit-filter 1s;\r\n  transition: filter 1s;\r\n  transition: filter 1s, -webkit-filter 1s;\r\n}\r\n\r\n.thumbnail:hover{\r\n  -webkit-filter: brightness(0.8);\r\n          filter: brightness(0.8);\r\n}\r\n\r\n.filter-wrapper{\r\n  position: absolute;\r\n  bottom: 0px;\r\n  padding: 2px 15px;\r\n  background-color: var(--colour-black-05);\r\n  color: var(--colour-white);\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.chip {\r\n  background-color: var(--colour-accent);\r\n  border-radius: 16px;\r\n  display: inline-block;\r\n  padding: 0px 15px;\r\n  margin: 1px 2px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC10aWxlc2V0L2NvbnRlbnQtdGlsZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsd0JBQWdCO1VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUNWO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUFxQjtFQUFyQixxQkFBcUI7RUFBckIsd0NBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC10aWxlc2V0L2NvbnRlbnQtdGlsZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI292ZXJsYXl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMC4ycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvdXItYmxhY2stMDgpO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG4jb3ZlcmxheSAjbWFya2Rvd24tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgbWluLWhlaWdodDogNTB2aDtcclxuICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG91ci13aGl0ZSk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmaWx0ZXI6IGJsdXIoMTUpO1xyXG59XHJcblxyXG4jb3ZlcmxheSAjbWFya2Rvd24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDdweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuI292ZXJsYXkgI21hcmtkb3duLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG91ci1ibGFjay0wNSk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4jb3ZlcmxheSAjbWFya2Rvd24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3VyLW1haW4pO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG91ci1ibGFjayk7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4jb3ZlcmxheSAjbWFya2Rvd24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3VyLW1haW4tMDgpO1xyXG59XHJcblxyXG4jb3ZlcmxheSAqIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3VyLWJsYWNrKTtcclxufVxyXG5cclxuI292ZXJsYXkgLmJ1dHRvbi13cmFwcGVyIC5idG57XHJcbiAgY29sb3I6IHZhcigtLWNvbG91ci1ibGFjayk7XHJcbiAgbWFyZ2luOiAwcHggNXB4O1xyXG5cclxufVxyXG5cclxuI292ZXJsYXkgLmJ1dHRvbi13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG91ci1ibGFjayk7XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvdXItd2hpdGUpO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwdmg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC4xcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aWxlOmhvdmVye1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbn1cclxuXHJcbi50aWxlLW1lZGlhLXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4udGlsZS1tZWRpYS13cmFwcGVyOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHZhcigtLWNvbG91ci1ibGFjay0wNSk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xyXG59XHJcblxyXG4udGh1bWJuYWlse1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLnRodW1ibmFpbDpob3ZlcntcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcclxufVxyXG5cclxuLmZpbHRlci13cmFwcGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICBwYWRkaW5nOiAycHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvdXItYmxhY2stMDUpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvdXItd2hpdGUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jaGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvdXItYWNjZW50KTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBtYXJnaW46IDFweCAycHg7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/content-tileset/content-tileset.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/content-tileset/content-tileset.component.ts ***!
          \**************************************************************/
        /*! exports provided: ContentTilesetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTilesetComponent", function () { return ContentTilesetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var dictionaries_content_dict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dictionaries/content-dict */ "./src/dictionaries/content-dict.ts");
            /* harmony import */ var dictionaries_filter_dict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dictionaries/filter-dict */ "./src/dictionaries/filter-dict.ts");
            var ContentTilesetComponent = /** @class */ (function () {
                function ContentTilesetComponent() {
                }
                ContentTilesetComponent.prototype.ngOnInit = function () {
                    this.contentsAll = dictionaries_content_dict__WEBPACK_IMPORTED_MODULE_2__["CONTENTS"];
                    this.filtersUsed = dictionaries_filter_dict__WEBPACK_IMPORTED_MODULE_3__["FILTERS"];
                    this.shouldShowModal = false;
                };
                /* Overlay  */
                ContentTilesetComponent.prototype.selectContent = function (selectedContent) {
                    this.shouldShowModal = true;
                    this.currentlySelected = selectedContent;
                };
                ContentTilesetComponent.prototype.deselectContent = function () {
                    this.currentlySelected = null;
                    this.shouldShowModal = false;
                };
                /* Content Additional Methods */
                ContentTilesetComponent.prototype.getNextContentLocation = function () {
                    var _this = this;
                    this.contentsAll.find(function (content, index) {
                        if (content.id === _this.currentlySelected.id) {
                            if (index + 1 === _this.contentsAll.length) {
                                _this.deselectContent();
                                _this.selectContent(_this.contentsAll[0]);
                                return true;
                            }
                            else {
                                _this.deselectContent();
                                _this.selectContent(_this.contentsAll[index + 1]);
                                return true;
                            }
                        }
                    });
                };
                /* Filters */
                ContentTilesetComponent.prototype.returnCorrespondingFilters = function (content) {
                    // find matches between each filter.connected && content.id;
                    var listOfFilters = [];
                    var listOfFiltersText = [];
                    for (var _i = 0, _a = dictionaries_filter_dict__WEBPACK_IMPORTED_MODULE_3__["FILTERS"]; _i < _a.length; _i++) {
                        var correspondingFilter = _a[_i];
                        for (var _b = 0, _c = correspondingFilter.connected; _b < _c.length; _b++) {
                            var connector = _c[_b];
                            if (connector === content.id) {
                                listOfFilters.push(correspondingFilter);
                                listOfFiltersText.push(correspondingFilter.name);
                            }
                        }
                    }
                    return listOfFiltersText;
                };
                return ContentTilesetComponent;
            }());
            ContentTilesetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-content-tileset',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-tileset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-tileset/content-tileset.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-tileset.component.css */ "./src/app/content-tileset/content-tileset.component.css")).default]
                })
            ], ContentTilesetComponent);
            /***/ 
        }),
        /***/ "./src/app/dong-header/dong-header.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/dong-header/dong-header.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#header-wrapper.open{\r\n  min-height: 100vh;\r\n  padding: 30px 10px;\r\n}\r\n\r\n#header-wrapper{\r\n  background-color: var(--colour-main);\r\n  transition: min-height 0.3s;\r\n  width: 100%;\r\n}\r\n\r\n.header-text-wrapper {\r\n  display: inline-block;\r\n}\r\n\r\n#header-wrapper.closed{\r\n  min-height: 100px;\r\n  padding: 15px 30px 0px;\r\n}\r\n\r\n.decorator-font a{\r\n  color: var(--colour-black);\r\n}\r\n\r\n.open .header-text-wrapper{\r\n  position: absolute;\r\n  top: 50vh;\r\n  padding-left: 5%;\r\n}\r\n\r\n.open app-dong-router{\r\n  position: absolute;\r\n  margin-right: 15px;\r\n  margin-bottom: 20px;\r\n  right: 0px;\r\n  bottom: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZy1oZWFkZXIvZG9uZy1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kb25nLWhlYWRlci9kb25nLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlci13cmFwcGVyLm9wZW57XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMzBweCAxMHB4O1xyXG59XHJcblxyXG4jaGVhZGVyLXdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3VyLW1haW4pO1xyXG4gIHRyYW5zaXRpb246IG1pbi1oZWlnaHQgMC4zcztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbiNoZWFkZXItd3JhcHBlci5jbG9zZWR7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4IDBweDtcclxufVxyXG5cclxuLmRlY29yYXRvci1mb250IGF7XHJcbiAgY29sb3I6IHZhcigtLWNvbG91ci1ibGFjayk7XHJcbn1cclxuXHJcbi5vcGVuIC5oZWFkZXItdGV4dC13cmFwcGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwdmg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLm9wZW4gYXBwLWRvbmctcm91dGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/dong-header/dong-header.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/dong-header/dong-header.component.ts ***!
          \******************************************************/
        /*! exports provided: DongHeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DongHeaderComponent", function () { return DongHeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DongHeaderComponent = /** @class */ (function () {
                function DongHeaderComponent(router) {
                    var _this = this;
                    this.router = router;
                    this.isOpen = false;
                    router.events.subscribe(function (e) {
                        console.log(e);
                        if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                            if (e.url === '/') {
                                _this.changeHeaderStatus(true);
                            }
                            else {
                                _this.changeHeaderStatus(false);
                            }
                        }
                    });
                }
                DongHeaderComponent.prototype.ngOnInit = function () {
                };
                DongHeaderComponent.prototype.changeHeaderStatus = function (toOpen) {
                    if (toOpen) {
                        this.isOpen = true;
                        this.headerStatus = 'open';
                    }
                    else {
                        this.isOpen = false;
                        this.headerStatus = 'closed';
                    }
                };
                return DongHeaderComponent;
            }());
            DongHeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            DongHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dong-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dong-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dong-header/dong-header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dong-header.component.css */ "./src/app/dong-header/dong-header.component.css")).default]
                })
            ], DongHeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/dong-router/dong-router.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/dong-router/dong-router.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a {\r\n  margin: 1px 2px;\r\n}\r\n\r\n#navbar{\r\n  padding: 0px;\r\n  display: inline-block;\r\n}\r\n\r\n#navbar-button{\r\n  min-height: 60px;\r\n  min-width: 60px;\r\n  margin: 4px;\r\n  margin-left: 0px;\r\n}\r\n\r\n#navbar-button img{\r\n  width: 100%;\r\n  height: 100%;\r\n  -ms-interpolation-mode: nearest-neighbor;\r\n      image-rendering: -moz-crisp-edges;\r\n      image-rendering: pixelated;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uZy1yb3V0ZXIvZG9uZy1yb3V0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBMEI7TUFBMUIsaUNBQTBCO01BQTFCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2Rvbmctcm91dGVyL2Rvbmctcm91dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBtYXJnaW46IDFweCAycHg7XHJcbn1cclxuXHJcbiNuYXZiYXJ7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI25hdmJhci1idXR0b257XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuI25hdmJhci1idXR0b24gaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/dong-router/dong-router.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/dong-router/dong-router.component.ts ***!
          \******************************************************/
        /*! exports provided: DongRouterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DongRouterComponent", function () { return DongRouterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DongRouterComponent = /** @class */ (function () {
                function DongRouterComponent() {
                    this.navbarOpen = false;
                }
                DongRouterComponent.prototype.toggleNavbar = function () {
                    this.navbarOpen = !this.navbarOpen;
                };
                DongRouterComponent.prototype.ngOnInit = function () {
                };
                return DongRouterComponent;
            }());
            DongRouterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dong-router',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dong-router.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dong-router/dong-router.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dong-router.component.css */ "./src/app/dong-router/dong-router.component.css")).default]
                })
            ], DongRouterComponent);
            /***/ 
        }),
        /***/ "./src/dictionaries/content-dict.ts": 
        /*!******************************************!*\
          !*** ./src/dictionaries/content-dict.ts ***!
          \******************************************/
        /*! exports provided: CONTENTS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENTS", function () { return CONTENTS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CONTENTS = [
                {
                    id: 0,
                    postLocation: 'assets/md_content/0_EOTW_tabletop.md',
                    title: 'At the Edge of the West',
                    img: 'assets/img/thumbnails/eotw_thumbnail.png'
                },
                {
                    id: 1,
                    postLocation: 'assets/md_content/1_CrimeyBoyz.md',
                    title: 'Crimey Boyz',
                    img: 'assets/img/thumbnails/gameplay_defcon.png'
                },
                {
                    id: 2,
                    postLocation: 'assets/md_content/2_RicketySS.md',
                    title: 'Rickety Spaceship Simulator',
                    img: 'assets/img/thumbnails/cinematic.png'
                },
                {
                    id: 3,
                    postLocation: 'assets/md_content/3_Signal.md',
                    title: 'Signal',
                    img: 'assets/img/thumbnails/signal.png'
                },
                {
                    id: 4,
                    postLocation: 'assets/md_content/4_BHBR.md',
                    title: 'Better Habits Battle Royale',
                    img: 'assets/img/thumbnails/xd_prototype.png'
                },
                {
                    id: 6,
                    postLocation: 'assets/md_content/6_ATOOnline.md',
                    title: 'ATO Online',
                    img: 'assets/img/thumbnails/atoo.png'
                },
                {
                    id: 7,
                    postLocation: 'assets/md_content/7_Kinesus.md',
                    title: 'Kinesus',
                    img: 'assets/img/thumbnails/kinesus.png'
                },
                {
                    id: 8,
                    postLocation: 'assets/md_content/8_ObeliskOfInsanity.md',
                    title: 'Obelisk of Insanity',
                    img: 'assets/img/thumbnails/obelisk.png'
                }
            ];
            /***/ 
        }),
        /***/ "./src/dictionaries/filter-dict.ts": 
        /*!*****************************************!*\
          !*** ./src/dictionaries/filter-dict.ts ***!
          \*****************************************/
        /*! exports provided: FILTERS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function () { return FILTERS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var FILTERS = [
                { id: 0, name: 'UX Design', connected: [0, 1, 2, 4] },
                { id: 1, name: 'Game Development', connected: [0, 1, 2, 7, 8] },
                { id: 2, name: 'Video Editing', connected: [1, 2, 3] },
                { id: 3, name: 'Programming', connected: [1, 2, 6, 7, 8] },
                { id: 4, name: 'Multiple Users', connected: [0, 1, 2, 4] },
                { id: 5, name: 'Single User', connected: [7, 8] },
            ];
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\Google Drive\personal works\portfolio_website\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map