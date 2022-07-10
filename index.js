/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/common-igrid/dist/cjs/src/component/grid/Column.js":
/*!*************************************************************************!*\
  !*** ./node_modules/common-igrid/dist/cjs/src/component/grid/Column.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\nclass Column extends HTMLElement {\n    constructor({ children, span, padding }) {\n        super();\n        this.padding = 0;\n        this.span = {\n            xxl: 0,\n            xl: 0,\n            lg: 0,\n            md: 0,\n            sm: 0,\n            xs: 0,\n        };\n        this.attachShadow({ mode: 'open' });\n        this.$slot = new common_iutils_1.IElement('slot')\n            .setAttribute('name', 'column-slot')\n            .getElement();\n        this.$container = new common_iutils_1.IElement('div')\n            .setAttribute('class', 'container')\n            .appendChild(this.$slot)\n            .getElement();\n        this.$style = document.createElement('style');\n        this.$customStyle = document.createElement('style');\n        this.shadowRoot.append(this.$style, this.$customStyle, this.$container);\n        children && this.setContent(children);\n        span && this.setSpan(span);\n        padding && this.setPadding(padding);\n    }\n    static get observedAttributes() {\n        return ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'style'];\n    }\n    connectedCallback() {\n        this.span.xxl = parseInt(this.getAttribute('xxl'));\n        this.span.xl = parseInt(this.getAttribute('xl'));\n        this.span.lg = parseInt(this.getAttribute('lg'));\n        this.span.md = parseInt(this.getAttribute('md'));\n        this.span.sm = parseInt(this.getAttribute('sm'));\n        this.span.xs = parseInt(this.getAttribute('xs'));\n        this.padding = parseInt(this.getAttribute('padding') || '0');\n        this.updateStyleBySpan(Object.assign(Object.assign({}, this.span), { padding: this.padding }));\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        if (oldValue !== newValue) {\n            switch (name) {\n                case 'xxl':\n                    this.span = Object.assign(Object.assign({}, this.span), { xxl: newValue });\n                    break;\n                case 'xl':\n                    this.span = Object.assign(Object.assign({}, this.span), { xl: newValue });\n                    break;\n                case 'lg':\n                    this.span = Object.assign(Object.assign({}, this.span), { lg: newValue });\n                    break;\n                case 'md':\n                    this.span = Object.assign(Object.assign({}, this.span), { md: newValue });\n                    break;\n                case 'sm':\n                    this.span = Object.assign(Object.assign({}, this.span), { sm: newValue });\n                    break;\n                case 'xs':\n                    this.span = Object.assign(Object.assign({}, this.span), { xs: newValue });\n                    break;\n                case 'padding':\n                    this.padding = newValue;\n                    break;\n            }\n            this.updateStyleBySpan(Object.assign(Object.assign({}, this.span), { padding: this.padding }));\n        }\n    }\n    updateStyleBySpan({ xxl, xl, lg, md, sm, xs, padding = 0 }) {\n        this.$style.textContent = `\n      :host {\n        margin: ${padding / 2}px;\n      }\n      @media(max-width: 576px) {\n        :host {\n            width: calc(${xs * 4.166666}% - ${padding}px);\n        }\n      }\n      @media(min-width: 576px) and (max-width: 768px) {\n        :host {\n            width: calc(${sm * 4.166666}% - ${padding}px);\n        }\n      }\n      @media(min-width: 768px) and (max-width: 992px) {\n        :host {\n            width: calc(${md * 4.166666}% - ${padding}px);\n        }\n      }\n      @media(min-width: 992px) and (max-width: 1200px) {\n        :host {\n            width: calc(${lg * 4.166666}% - ${padding}px);\n        }\n      }\n      @media(min-width: 1200px) and (max-width: 1600px) {\n        :host {\n            width: calc(${xl * 4.166666}% - ${padding}px);\n        }\n      }\n      @media(min-width: 1600px) {\n        :host {\n            width: calc(${xxl * 4.166666}% - ${padding}px);\n        }\n      }\n    `;\n    }\n    setSpan(span) {\n        this.setAttribute('xxl', span.xxl.toString());\n        this.setAttribute('xl', span.xl.toString());\n        this.setAttribute('lg', span.lg.toString());\n        this.setAttribute('md', span.md.toString());\n        this.setAttribute('sm', span.sm.toString());\n        this.setAttribute('xs', span.xs.toString());\n        return this;\n    }\n    setContent(content) {\n        this.$slot.replaceChildren();\n        new common_iutils_1.IElement('div')\n            .setAttribute('slot', 'column-slot')\n            .append(content)\n            .setParent(this.$slot)\n            .getElement();\n        return this;\n    }\n    setPadding(padding) {\n        this.setAttribute('padding', padding.toString());\n        return this;\n    }\n    setStyle(style) {\n        this.$customStyle.textContent = this.$customStyle.textContent + style;\n        return this;\n    }\n}\nexports[\"default\"] = Column;\ncustomElements.define('inte-column', Column);\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-igrid/dist/cjs/src/component/grid/Column.js?");

/***/ }),

/***/ "./node_modules/common-igrid/dist/cjs/src/component/grid/Row.js":
/*!**********************************************************************!*\
  !*** ./node_modules/common-igrid/dist/cjs/src/component/grid/Row.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst common_iutils_1 = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\nclass Row extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        this.$bodyStyle = this.$style = new common_iutils_1.IElement('style')\n            .setTextContent(`\n        div[slot=\"row-slot\"] {\n          display: flex;\n          flex-wrap: wrap;\n        }\n      `)\n            .setParent(document.head)\n            .getElement();\n        this.$style = new common_iutils_1.IElement('style').getElement();\n        this.$slot = new common_iutils_1.IElement('slot')\n            .setAttribute('name', 'row-slot')\n            .getElement();\n        this.$container = new common_iutils_1.IElement('div')\n            .setAttribute('class', 'container')\n            .appendChild(this.$slot)\n            .getElement();\n        this.shadowRoot.append(this.$style, this.$container);\n    }\n    static get observedAttributes() {\n        return ['style'];\n    }\n    attributeChangedCallback(name, oldValue, newValue) {\n        switch (name) {\n            case 'style':\n                break;\n        }\n    }\n    setContent(...rest) {\n        this.$slot.replaceChildren();\n        const $slotChild = new common_iutils_1.IElement('div')\n            .setAttribute('slot', 'row-slot')\n            .append(...rest)\n            .setParent(this.$slot)\n            .getElement();\n        $slotChild.style.display = 'flex';\n        $slotChild.style.width = '100%';\n        $slotChild.style.flexWrap = 'wrap';\n        return this;\n    }\n}\nexports[\"default\"] = Row;\ncustomElements.define('inte-row', Row);\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-igrid/dist/cjs/src/component/grid/Row.js?");

/***/ }),

/***/ "./node_modules/common-igrid/dist/cjs/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/common-igrid/dist/cjs/src/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Column = exports.Row = exports.column = exports.row = void 0;\nconst Column_1 = __webpack_require__(/*! ./component/grid/Column */ \"./node_modules/common-igrid/dist/cjs/src/component/grid/Column.js\");\nexports.Column = Column_1.default;\nconst Row_1 = __webpack_require__(/*! ./component/grid/Row */ \"./node_modules/common-igrid/dist/cjs/src/component/grid/Row.js\");\nexports.Row = Row_1.default;\nconst row = () => {\n    return new Row_1.default();\n};\nexports.row = row;\nconst column = (props) => {\n    return new Column_1.default(props);\n};\nexports.column = column;\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-igrid/dist/cjs/src/index.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/IElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/IElement.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass IElement {\n    constructor(tag) {\n        this.$element = document.createElement(tag);\n    }\n    setAttribute(name, attribute) {\n        this.$element.setAttribute(name, attribute);\n        return this;\n    }\n    append(...nodes) {\n        this.$element.append(...nodes);\n        return this;\n    }\n    appendChild(node) {\n        this.$element.append(node);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n    clearChildren() {\n        this.$element.replaceChildren();\n        return this;\n    }\n    setParent(node) {\n        node.appendChild(this.$element);\n        return this;\n    }\n    setTextContent(text) {\n        this.$element.textContent = text;\n        return this;\n    }\n    innerHTML(text) {\n        this.$element.innerHTML = text;\n        return this;\n    }\n}\nexports[\"default\"] = IElement;\n;\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-iutils/dist/cjs/utils/IElement.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/IStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/IStyle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass IStyle {\n    constructor($element) {\n        this.$element = $element;\n    }\n    width(value) {\n        this.$element.style.width = value;\n        return this;\n    }\n    height(value) {\n        this.$element.style.height = value;\n        return this;\n    }\n    color(value) {\n        this.$element.style.color = value;\n        return this;\n    }\n    left(value) {\n        this.$element.style.left = value;\n        return this;\n    }\n    right(value) {\n        this.$element.style.right = value;\n        return this;\n    }\n    top(value) {\n        this.$element.style.top = value;\n        return this;\n    }\n    bottom(value) {\n        this.$element.style.bottom = value;\n        return this;\n    }\n    transform(value) {\n        this.$element.style.transform = value;\n        return this;\n    }\n    opacity(value) {\n        this.$element.style.opacity = value;\n        return this;\n    }\n    background(value) {\n        this.$element.style.background = value;\n        return this;\n    }\n    display(value) {\n        this.$element.style.display = value;\n        return this;\n    }\n    flexDirection(value) {\n        this.$element.style.flexDirection = value;\n        return this;\n    }\n    justifyContent(value) {\n        this.$element.style.justifyContent = value;\n        return this;\n    }\n    alignItems(value) {\n        this.$element.style.alignItems = value;\n        return this;\n    }\n    margin(value) {\n        this.$element.style.margin = value;\n        return this;\n    }\n    marginTop(value) {\n        this.$element.style.marginTop = value;\n        return this;\n    }\n    marginBottom(value) {\n        this.$element.style.marginBottom = value;\n        return this;\n    }\n    marginLeft(value) {\n        this.$element.style.marginLeft = value;\n        return this;\n    }\n    marginRight(value) {\n        this.$element.style.marginRight = value;\n        return this;\n    }\n    padding(value) {\n        this.$element.style.padding = value;\n        return this;\n    }\n    paddingTop(value) {\n        this.$element.style.paddingTop = value;\n        return this;\n    }\n    paddingBottom(value) {\n        this.$element.style.paddingBottom = value;\n        return this;\n    }\n    paddingRight(value) {\n        this.$element.style.paddingRight = value;\n        return this;\n    }\n    paddingLeft(value) {\n        this.$element.style.paddingLeft = value;\n        return this;\n    }\n    border(value) {\n        this.$element.style.border = value;\n        return this;\n    }\n    borderTop(value) {\n        this.$element.style.borderTop = value;\n        return this;\n    }\n    borderBottom(value) {\n        this.$element.style.borderBottom = value;\n        return this;\n    }\n    borderRight(value) {\n        this.$element.style.borderRight = value;\n        return this;\n    }\n    borderLeft(value) {\n        this.$element.style.borderLeft = value;\n        return this;\n    }\n    borderRadius(value) {\n        this.$element.style.borderRadius = value;\n        return this;\n    }\n    transition(value) {\n        this.$element.style.transition = value;\n        return this;\n    }\n    position(value) {\n        this.$element.style.position = value;\n        return this;\n    }\n    minWidth(value) {\n        this.$element.style.minWidth = value;\n        return this;\n    }\n    minHeight(value) {\n        this.$element.style.minHeight = value;\n        return this;\n    }\n    boxShadow(value) {\n        this.$element.style.boxShadow = value;\n        return this;\n    }\n    transformOrigin(value) {\n        this.$element.style.transformOrigin = value;\n        return this;\n    }\n    cursor(value) {\n        this.$element.style.cursor = value;\n        return this;\n    }\n    whiteSpace(value) {\n        this.$element.style.whiteSpace = value;\n        return this;\n    }\n    fontWeight(value) {\n        this.$element.style.fontWeight = value;\n        return this;\n    }\n    fontSize(value) {\n        this.$element.style.fontSize = value;\n        return this;\n    }\n    backgroundImage(value) {\n        this.$element.style.backgroundImage = value;\n        return this;\n    }\n    backgroundPosition(value) {\n        this.$element.style.backgroundPosition = value;\n        return this;\n    }\n    backgroundRepeat(value) {\n        this.$element.style.backgroundRepeat = value;\n        return this;\n    }\n    backgroundSize(value) {\n        this.$element.style.backgroundSize = value;\n        return this;\n    }\n    backgroundColor(value) {\n        this.$element.style.backgroundColor = value;\n        return this;\n    }\n    setStyle(value) {\n        this.$element.setAttribute('style', value);\n        return this;\n    }\n    getElement() {\n        return this.$element;\n    }\n}\nexports[\"default\"] = IStyle;\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-iutils/dist/cjs/utils/IStyle.js?");

/***/ }),

/***/ "./node_modules/common-iutils/dist/cjs/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/common-iutils/dist/cjs/utils/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.IStyle = exports.IElement = void 0;\nconst IElement_1 = __webpack_require__(/*! ./IElement */ \"./node_modules/common-iutils/dist/cjs/utils/IElement.js\");\nexports.IElement = IElement_1.default;\nconst IStyle_1 = __webpack_require__(/*! ./IStyle */ \"./node_modules/common-iutils/dist/cjs/utils/IStyle.js\");\nexports.IStyle = IStyle_1.default;\n\n\n//# sourceURL=webpack://friendly-resume/./node_modules/common-iutils/dist/cjs/utils/index.js?");

/***/ }),

/***/ "./public/profile.jpg":
/*!****************************!*\
  !*** ./public/profile.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b9bb9cb6fa566a5e001573b05e09bd72.jpg\");\n\n//# sourceURL=webpack://friendly-resume/./public/profile.jpg?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://friendly-resume/./index.css?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _public_resume_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/resume.json */ \"./public/resume.json\");\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var _src_components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/Title */ \"./src/components/Title/index.ts\");\n/* harmony import */ var _src_components_Links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/Links */ \"./src/components/Links/index.ts\");\n/* harmony import */ var _src_components_AboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/AboutMe */ \"./src/components/AboutMe/index.ts\");\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _src_components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/WorkExperience */ \"./src/components/WorkExperience/index.ts\");\n/* harmony import */ var _src_components_OtherExperience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/components/OtherExperience */ \"./src/components/OtherExperience/index.ts\");\n/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/components/Skills */ \"./src/components/Skills/index.ts\");\n/* harmony import */ var _public_profile_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/profile.jpg */ \"./public/profile.jpg\");\n/* harmony import */ var _src_components_Scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/components/Scroll */ \"./src/components/Scroll/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst span = {\n    header: { xxl: 16, xl: 16, lg: 18, md: 16, sm: 12, xs: 24 },\n    link: { xxl: 8, xl: 8, lg: 6, md: 8, sm: 12, xs: 24 },\n    all24: { xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 },\n    title: { xxl: 8, xl: 8, lg: 8, md: 10, sm: 12, xs: 24 },\n    project: { xxl: 16, xl: 16, lg: 16, md: 14, sm: 12, xs: 24 },\n};\n(() => {\n    new _src_components_Scroll__WEBPACK_IMPORTED_MODULE_11__.Scroll();\n    document.head.querySelector('title').innerText = _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.browserTitle;\n    const $container = document.querySelector('.container');\n    const $row = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.row)();\n    $container.append($row);\n    const $titleColumn = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.header,\n        children: new _src_components_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ title: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.title }).render()\n    });\n    const $linkColumn = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.link,\n        children: new _src_components_Links__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ links: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.links }).render(),\n    });\n    const $profile = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.title,\n        children: new common_iutils__WEBPACK_IMPORTED_MODULE_6__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_6__.IElement('div').getElement())\n            .height('100%')\n            .width('100%')\n            .backgroundPosition('center')\n            .backgroundSize('contain')\n            .backgroundRepeat('no-repeat')\n            .backgroundImage(`url('${_public_profile_jpg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]}')`)\n            .getElement(),\n        padding: 20,\n    });\n    const $aboutMe = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.project,\n        children: new _src_components_AboutMe__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({ content: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.aboutMe }).render(),\n        padding: 20,\n    });\n    const $experienceTitle = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.all24,\n        children: makeSubTitle('Work experience'),\n    });\n    const $workExperienceList = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.all24,\n        children: new _src_components_WorkExperience__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({ dataList: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.workExperience }).render()\n    });\n    const $otherExperienceTitle = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.title,\n        children: makeSubTitle('Other experience')\n    });\n    const $otherExperienceList = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.project,\n        children: new _src_components_OtherExperience__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({ otherExperience: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.otherExperience }).render()\n    });\n    const $skillTitle = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.title,\n        children: makeSubTitle('My Skills'),\n    });\n    const $skillContent = (0,common_igrid__WEBPACK_IMPORTED_MODULE_2__.column)({\n        span: span.project,\n        children: new _src_components_Skills__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({ skills: _public_resume_json__WEBPACK_IMPORTED_MODULE_1__.skills }).render()\n    });\n    $row.setContent($titleColumn, $linkColumn, $profile, $aboutMe, divider(), $experienceTitle, $workExperienceList, divider(), $otherExperienceTitle, $otherExperienceList, divider(), $skillTitle, $skillContent);\n})();\nfunction makeSubTitle(title) {\n    return new common_iutils__WEBPACK_IMPORTED_MODULE_6__.IElement('h2').setTextContent(title).getElement();\n}\nfunction divider() {\n    return new common_iutils__WEBPACK_IMPORTED_MODULE_6__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_6__.IElement('hr').getElement())\n        .width('100%')\n        .border('0')\n        .borderBottom('1px solid #eee')\n        .getElement();\n}\n\n\n//# sourceURL=webpack://friendly-resume/./index.ts?");

/***/ }),

/***/ "./src/components/AboutMe/index.ts":
/*!*****************************************!*\
  !*** ./src/components/AboutMe/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutMe)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n\n\nclass AboutMe {\n    constructor({ content }) {\n        this.span = { xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24 };\n        this.content = content;\n    }\n    render() {\n        const $row = (0,common_igrid__WEBPACK_IMPORTED_MODULE_1__.row)();\n        const $aboutMeTitle = (0,common_igrid__WEBPACK_IMPORTED_MODULE_1__.column)({\n            span: this.span,\n            children: makeSubTitle('About me'),\n        });\n        const $aboutMeColumn = (0,common_igrid__WEBPACK_IMPORTED_MODULE_1__.column)({\n            span: this.span,\n            children: new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('span')\n                .setTextContent(this.content)\n                .getElement(),\n        });\n        return $row.setContent($aboutMeTitle, $aboutMeColumn);\n    }\n}\nfunction makeSubTitle(title) {\n    return new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('h2').setTextContent(title).getElement();\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/AboutMe/index.ts?");

/***/ }),

/***/ "./src/components/Links/Image.ts":
/*!***************************************!*\
  !*** ./src/components/Links/Image.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _common_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/svg */ \"./src/components/common/svg.ts\");\n\n\nclass Image {\n    constructor({ name, link }) {\n        this.svg = _common_svg__WEBPACK_IMPORTED_MODULE_1__.svg;\n        this.name = name;\n        this.link = link;\n    }\n    render() {\n        const $svg = new DOMParser().parseFromString(this.svg[this.name], \"text/xml\").children[0];\n        new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle($svg).color('black').width('3rem').height('3rem');\n        const $image = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('a')\n            .appendChild($svg)\n            .setAttribute('href', this.link)\n            .setAttribute('target', '_blank')\n            .getElement())\n            .cursor('pointer')\n            .getElement();\n        if (this.name === 'email') {\n            $image.setAttribute('href', `mailto: ${this.link}`);\n        }\n        return $image;\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/Links/Image.ts?");

/***/ }),

/***/ "./src/components/Links/index.ts":
/*!***************************************!*\
  !*** ./src/components/Links/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Links)\n/* harmony export */ });\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ \"./src/components/Links/Image.ts\");\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\n\nclass Links {\n    constructor({ links }) {\n        this.links = links;\n    }\n    render() {\n        const $row = new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('div').getElement())\n            .height('100%')\n            .display('flex')\n            .alignItems('center')\n            .justifyContent('space-evenly')\n            .getElement();\n        const $list = this.links.map((link) => new _Image__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ name: link.name, link: link.link }).render());\n        $row.append(...$list);\n        return $row;\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/Links/index.ts?");

/***/ }),

/***/ "./src/components/OtherExperience/index.ts":
/*!*************************************************!*\
  !*** ./src/components/OtherExperience/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OtherExperience)\n/* harmony export */ });\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _common_makeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/makeLink */ \"./src/components/common/makeLink.ts\");\n/* harmony import */ var _common_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/List */ \"./src/components/common/List.ts\");\n\n\n\n\nclass OtherExperience {\n    constructor({ otherExperience }) {\n        this.span = {\n            xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24,\n        };\n        this.otherExperience = otherExperience;\n    }\n    render() {\n        const $row = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.row)();\n        const elementList = [];\n        this.otherExperience.forEach(data => {\n            const $link = (0,_common_makeLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data === null || data === void 0 ? void 0 : data.link);\n            const $title = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('h3').innerHTML(data.title + ($link ? $link.innerHTML : '')).getElement(),\n                span: this.span\n            });\n            const $period = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('span').setTextContent(data.period).getElement())\n                    .fontSize('0.7rem')\n                    .getElement(),\n                span: this.span\n            });\n            const $contentItems = data.description.map(description => new _common_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"](description).render());\n            const $contentList = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('ul')\n                    .append(...$contentItems)\n                    .getElement(),\n                span: this.span\n            });\n            $contentList.setStyle(`\n        li::marker {\n          color: dodgerblue;\n        }\n    `);\n            elementList.push($title, $period, $contentList);\n        });\n        return $row.setContent(...elementList);\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/OtherExperience/index.ts?");

/***/ }),

/***/ "./src/components/Scroll/index.ts":
/*!****************************************!*\
  !*** ./src/components/Scroll/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scroll\": () => (/* binding */ Scroll)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\nclass Scroll {\n    constructor() {\n        this.$container = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div').getElement();\n        this.$progress = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div').getElement();\n        new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle(this.$container)\n            .top('0')\n            .left('0')\n            .right('0')\n            .height('10px')\n            .backgroundColor('rgba(0, 0, 0, 0.2)')\n            .position('fixed');\n        new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle(this.$progress)\n            .top('0')\n            .height('10px')\n            .backgroundColor('dodgerblue')\n            .position('fixed');\n        this.$container.append(this.$progress);\n        document.body.append(this.$container);\n        this.scroll();\n    }\n    scroll() {\n        document.addEventListener('scroll', (e) => {\n            const percent = Math.floor(window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100);\n            this.$progress.style.width = `${percent}%`;\n        });\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/Scroll/index.ts?");

/***/ }),

/***/ "./src/components/Skills/index.ts":
/*!****************************************!*\
  !*** ./src/components/Skills/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Skills)\n/* harmony export */ });\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _common_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/List */ \"./src/components/common/List.ts\");\n\n\n\nclass Skills {\n    constructor({ skills }) {\n        this.span = {\n            xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24,\n        };\n        this.skills = skills;\n    }\n    render() {\n        const elementList = [];\n        this.skills.forEach(skill => {\n            const $title = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('h3').setTextContent(skill.title).getElement())\n                    .marginBottom('0')\n                    .getElement(),\n                span: this.span\n            });\n            const $contentItems = skill.description.map(description => new _common_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"](description).render());\n            const $contentList = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('ul')\n                    .append(...$contentItems)\n                    .getElement(),\n                span: this.span\n            });\n            $contentList.setStyle(`\n        li::marker {\n          color: dodgerblue;\n        }\n    `);\n            elementList.push($title, $contentList);\n        });\n        return (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.row)().setContent(...elementList);\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/Skills/index.ts?");

/***/ }),

/***/ "./src/components/Title/index.ts":
/*!***************************************!*\
  !*** ./src/components/Title/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\nclass Title {\n    constructor({ title }) {\n        this.title = title;\n    }\n    render() {\n        return new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('h1').setTextContent(this.title).getElement();\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/Title/index.ts?");

/***/ }),

/***/ "./src/components/WorkExperience/CompanyTitle.ts":
/*!*******************************************************!*\
  !*** ./src/components/WorkExperience/CompanyTitle.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompanyTitle)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\nclass CompanyTitle {\n    constructor({ title, period }) {\n        this.title = title;\n        this.period = period;\n    }\n    render() {\n        const $container = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div').getElement();\n        const $title = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('h3')\n            .setTextContent(this.title)\n            .getElement();\n        const $period = new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('span')\n            .setTextContent(this.period)\n            .getElement();\n        $period.style.fontSize = '0.7rem';\n        $container.append($title, $period);\n        return $container;\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/WorkExperience/CompanyTitle.ts?");

/***/ }),

/***/ "./src/components/WorkExperience/Item.ts":
/*!***********************************************!*\
  !*** ./src/components/WorkExperience/Item.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var _CompanyTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyTitle */ \"./src/components/WorkExperience/CompanyTitle.ts\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ \"./src/components/WorkExperience/Projects.ts\");\n\n\n\nclass Item {\n    constructor({ data }) {\n        this.span = {\n            title: { xxl: 8, xl: 8, lg: 8, md: 10, sm: 12, xs: 24 },\n            project: { xxl: 16, xl: 16, lg: 16, md: 14, sm: 12, xs: 24 },\n        };\n        this.data = data;\n    }\n    render() {\n        const $title = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n            span: this.span.title,\n            children: new _CompanyTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                title: this.data.company,\n                period: this.data.period\n            })\n                .render()\n        });\n        const $projects = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n            children: new _Projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ projects: this.data.projects }).render(),\n            span: this.span.project,\n        });\n        const $fragment = new DocumentFragment();\n        $fragment.append($title, $projects);\n        return $fragment;\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/WorkExperience/Item.ts?");

/***/ }),

/***/ "./src/components/WorkExperience/Projects.ts":
/*!***************************************************!*\
  !*** ./src/components/WorkExperience/Projects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _common_makeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/makeLink */ \"./src/components/common/makeLink.ts\");\n/* harmony import */ var _common_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/List */ \"./src/components/common/List.ts\");\n\n\n\n\nclass Projects {\n    constructor({ projects }) {\n        this.span = {\n            xxl: 24, xl: 24, lg: 24, md: 24, sm: 24, xs: 24,\n        };\n        this.projects = projects;\n    }\n    render() {\n        const $row = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.row)();\n        const elementList = [];\n        this.projects.forEach(project => {\n            const $link = (0,_common_makeLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project === null || project === void 0 ? void 0 : project.link);\n            const $projectName = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('h3').innerHTML(project.name + ($link ? $link.innerHTML : '')).getElement(),\n                span: this.span,\n            });\n            const $description = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('span').setTextContent('Description').getElement())\n                    .fontWeight('bold')\n                    .getElement(),\n                span: this.span,\n            });\n            const $descriptionContent = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('ul').appendChild(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('li').setTextContent(project.description).getElement())\n                    .fontSize('0.8rem')\n                    .getElement()).getElement(),\n                span: this.span,\n            });\n            $descriptionContent.setStyle(`\n        li::marker {\n          color: dodgerblue;\n        }\n      `);\n            const $myRole = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('span').setTextContent('My role').getElement())\n                    .fontWeight('bold')\n                    .getElement(),\n                span: this.span,\n            });\n            const roleList = project.myRole.map(role => new _common_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"](role).render());\n            const $myRoleContent = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.column)({\n                children: new common_iutils__WEBPACK_IMPORTED_MODULE_1__.IElement('ul').append(...roleList).getElement(),\n                span: this.span,\n            });\n            $myRoleContent.setStyle(`\n        li::marker {\n          color: dodgerblue;\n        }\n      `);\n            elementList.push($projectName, $description, $descriptionContent, $myRole, $myRoleContent);\n        });\n        return $row.setContent(...elementList);\n    }\n}\n;\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/WorkExperience/Projects.ts?");

/***/ }),

/***/ "./src/components/WorkExperience/index.ts":
/*!************************************************!*\
  !*** ./src/components/WorkExperience/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WorkExperience)\n/* harmony export */ });\n/* harmony import */ var common_igrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-igrid */ \"./node_modules/common-igrid/dist/cjs/src/index.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ \"./src/components/WorkExperience/Item.ts\");\n\n\nclass WorkExperience {\n    constructor({ dataList }) {\n        this.dataList = dataList;\n    }\n    render() {\n        const $row = (0,common_igrid__WEBPACK_IMPORTED_MODULE_0__.row)();\n        const documentFragments = this.dataList.map(data => {\n            return new _Item__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ data }).render();\n        });\n        const $columns = Array.from(documentFragments, (element => element));\n        return $row.setContent(...$columns);\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/WorkExperience/index.ts?");

/***/ }),

/***/ "./src/components/common/List.ts":
/*!***************************************!*\
  !*** ./src/components/common/List.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n\nclass List {\n    constructor(description) {\n        this.description = description;\n    }\n    render() {\n        return new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle(new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('li').setTextContent(this.description).getElement())\n            .fontSize('0.8rem')\n            .getElement();\n    }\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/common/List.ts?");

/***/ }),

/***/ "./src/components/common/makeLink.ts":
/*!*******************************************!*\
  !*** ./src/components/common/makeLink.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeLink)\n/* harmony export */ });\n/* harmony import */ var common_iutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-iutils */ \"./node_modules/common-iutils/dist/cjs/utils/index.js\");\n/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg */ \"./src/components/common/svg.ts\");\n\n\nfunction makeLink(link) {\n    if (!link) {\n        return;\n    }\n    return new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('div').appendChild(new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IElement('a')\n        .appendChild(new common_iutils__WEBPACK_IMPORTED_MODULE_0__.IStyle(new DOMParser().parseFromString(_svg__WEBPACK_IMPORTED_MODULE_1__.svg.link, \"text/xml\").children[0])\n        .height('25px')\n        .width('25px')\n        .margin('0.2rem')\n        .getElement())\n        .setAttribute('href', link)\n        .setAttribute('target', '_blank')\n        .getElement())\n        .getElement();\n}\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/common/makeLink.ts?");

/***/ }),

/***/ "./src/components/common/svg.ts":
/*!**************************************!*\
  !*** ./src/components/common/svg.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"svg\": () => (/* binding */ svg)\n/* harmony export */ });\nconst svg = {\n    github: '<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 1024 1024\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z\"></path></svg>',\n    notion: '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" role=\"img\"><title>Notion icon</title><path d=\"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z\"/></svg>',\n    blog: '<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 190 190\" style=\"enable-background:new 0 0 190 190;\" xml:space=\"preserve\"><path d=\"M184.874,0H5.126C2.295,0,0,2.295,0,5.126v179.748C0,187.705,2.295,190,5.126,190h179.748c2.831,0,5.126-2.295,5.126-5.126  V5.126C190,2.295,187.705,0,184.874,0z M156.506,117.092c-0.267,19.144-12.36,34.353-30.787,38.668  c-2.663,0.625-5.468,0.872-8.211,0.89c-15.074,0.084-30.152,0.174-45.224,0.006c-18.632-0.205-33.748-12.398-37.967-30.52  c-0.699-3.001-0.85-6.18-0.903-9.28c-0.125-7.312-0.04-14.63-0.04-21.942c0.017,0,0.033,0,0.05,0c0-8.03-0.153-16.062,0.03-24.084  c0.456-19.926,17.344-36.871,37.247-37.334l28.362,0.019c8.6,0.403,15.726,4.812,22.2,10.204  c7.604,6.333,11.439,14.598,12.309,24.373c0.18,2.036,0.544,4.066,1.011,6.058c0.884,3.801,2.314,5.169,6.151,5.609  c2.918,0.338,5.875,0.308,8.807,0.525c5.244,0.389,7.132,2.425,7.113,7.638C156.625,97.644,156.642,107.366,156.506,117.092z   M67.214,72.518c0-4.022,3.26-7.283,7.282-7.283h22.482c4.024,0,7.284,3.261,7.284,7.283c0,4.022-3.261,7.283-7.284,7.283H74.496  C70.474,79.801,67.214,76.54,67.214,72.518z M122.787,117.326c0,4.022-3.261,7.283-7.283,7.283H74.496  c-4.022,0-7.282-3.261-7.282-7.283c0-4.021,3.26-7.283,7.282-7.283h41.008C119.526,110.043,122.787,113.305,122.787,117.326z\"/></svg>',\n    link: '<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 494.46 494.46\" style=\"enable-background:new 0 0 494.46 494.46;\" xml:space=\"preserve\"><g><rect x=\"227.229\" y=\"119.856\" transform=\"matrix(0.7071 0.7071 -0.7071 0.7071 247.23 -102.406)\" style=\"fill:#005ECE;\" width=\"40.001\" height=\"254.749\"/> <path style=\"fill:#005ECE;\" d=\"M455.65,38.81L427.37,67.1c17.47,17.47,27.09,40.69,27.09,65.4c0,24.71-9.62,47.94-27.1,65.41   L326.78,298.49l28.28,28.29l100.59-100.59c25.03-25.02,38.81-58.3,38.81-93.69C494.46,97.11,480.68,63.84,455.65,38.81z\"/> <path style=\"fill:#2488FF;\" d=\"M361.96,0c-35.39,0-68.67,13.78-93.69,38.81L167.68,139.4l28.28,28.28L296.55,67.09   C314.02,49.62,337.25,40,361.96,40s47.92,9.62,65.4,27.1c0.01,0,28.29-28.29,28.29-28.29C430.62,13.78,397.35,0,361.96,0z\"/> <path style=\"fill:#005ECE;\" d=\"M197.91,427.37c-17.47,17.47-40.7,27.09-65.41,27.09c-24.71,0-47.92-9.62-65.4-27.1l-28.29,28.29   c25.03,25.03,58.3,38.81,93.69,38.81c35.39,0,68.67-13.78,93.69-38.81l100.59-100.59l-28.29-28.28L197.91,427.37z\"/> <path style=\"fill:#2488FF;\" d=\"M67.09,427.36C49.62,409.89,40,386.67,40,361.96s9.62-47.94,27.09-65.41l100.59-100.58l-28.28-28.29   L38.81,268.27C13.78,293.29,0,326.57,0,361.96s13.78,68.66,38.81,93.69C38.81,455.65,67.1,427.36,67.09,427.36z\"/></g></svg>',\n    email: '<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 474 474\" style=\"enable-background:new 0 0 474 474;\" xml:space=\"preserve\"><g><path d=\"M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8   C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401   c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5   c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1   c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0   c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1   c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5   c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z\"/></g></svg>'\n};\n\n\n//# sourceURL=webpack://friendly-resume/./src/components/common/svg.ts?");

/***/ }),

/***/ "./public/resume.json":
/*!****************************!*\
  !*** ./public/resume.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"browserTitle\":\"이력서 - 조인태\",\"title\":\"즐거움과 편리함을 주는 개발자\",\"aboutMe\":\"안녕하세요. 1년 차 웹 프론트엔드 엔지니어 조인태입니다. 현재 리액트를 주로 사용하여 웹/앱 환경의 애플리케이션 개발을 하고 있습니다. 저는 Vanilla JavaScript를 좋아합니다.\",\"links\":[{\"name\":\"github\",\"link\":\"https://github.com/jjongtaeng\"},{\"name\":\"email\",\"link\":\"jjojjo141995@gmail.com\"}],\"workExperience\":[{\"company\":\"알서포트\",\"period\":\"2022.01.03 ~\",\"projects\":[{\"name\":\"RemoteView Box\",\"description\":\"Remote View 서비스의 사용할 수 없는 환경에서 사용하기 위해 장치인 Box의 관리자 페이지를 구성했습니다. 에이전트를 등록하고, RView 서비스에서 이용합니다.\",\"myRole\":[\"Remote View Client(원격) 에이전트 등록 페이지 작업\",\"접속 네트워크 정보(Wi-Fi, Ethernet) 설정 페이지 작업\",\"React, TypeScript, Recoil, React-Query, CSS-in-JS, Storybook\"]},{\"name\":\"RemoteView\",\"description\":\"리모트뷰는 PC와 모바일(스마트폰) 등 기기들을 제어할 수 있는 원격제어 소프트웨어로 회사의 IT 기기 관리, 그룹관리, 재택근무 솔루션입니다.\",\"link\":\"https://www.rview.com\",\"myRole\":[\"WebConsole, WebViewer 유지보수 및 신규 기능 개발\",\"웹콘솔에서 MQTT 통신 기반 실시간 에이전트 상태 표시\",\"웹뷰어에서 MQTT 통신 기반 에이전트 실시간 키보드, 마우스 제어\",\"원격PC 영상 스트리밍을 위해 WebSocket 작업\"]}]},{\"company\":\"캐시스\",\"period\":\"2020.11.19 ~ 2021.12.23\",\"projects\":[{\"name\":\"DC 마이크로그리드\",\"description\":\"태양광 발전소 ~ 주택의 전기 공급과 사용 데이터를 시각화하여 차트와 흐름도로 표현한 실시간 관제 시스템입니다.\",\"myRole\":[\"실시간으로 데이터를 차트와 흐름도로 시각화하였습니다.\",\"백엔드를 스프링 프레임워크를 사용하여 직접 구현하였습니다.\",\"장치의 운전 및 정지 제어 명령 기능을 구현하였습니다.\",\"React, Ant Design, TypeScript\"]}]}],\"otherExperience\":[{\"title\":\"Simple Meeting\",\"period\":\"2022.06.25 ~ \",\"link\":\"https://meeting.jjongtaeng.com/\",\"description\":[\"화상 미팅 웹 어플리케이션\",\"[Front 기술] WebRTC, SocketIO, React, TypeScript, Tailwind, Recoil\",\"[Back 기술] NestJS, SocketIO, TypeORM, MariaDB\"]},{\"title\":\"Intesign\",\"period\":\"2021.12.15 ~ \",\"link\":\"https://jjongtaeng.github.io/intesign/\",\"description\":[\"webcomponents API를 사용하여 React에서 사용하던 디자인 라이브러리를 Vanilla JS 디자인 라이브러리로 제작\"]},{\"title\":\"Webdow10\",\"period\":\"2021.09.01 ~ 2021.09.11\",\"link\":\"https://webdow10.herokuapp.com/\",\"description\":[\"윈도우 테마의 UI/UX를 웹으로 표현한 사이트\",\"webcomponents API를 사용하여 구현\"]},{\"title\":\"3D-Toy-Web\",\"period\":\"2021.11.01 ~ 2021.11.15\",\"link\":\"https://toyweb3d.herokuapp.com/\",\"description\":[\"Three.js를 사용하여 3D 웹 구성\",\"3D 환경에서의 인터랙티브 구현\"]},{\"title\":\"호서대학교\",\"period\":\"2014.02 ~ 2021.02\",\"description\":[\"정보보호학과 - 졸업\"]}],\"skills\":[{\"title\":\"JavaScript\",\"description\":[\"ES6+ 이후 문법에 익숙하고 최신 동향에 관심이 많습니다.\",\"Web API, DOM API를 능숙하게 다룹니다.\",\"Prototoype 기반의 OOP 개념을 이해하고 활용합니다.\",\"내부 코드에서 this를 알고 어떤 바인딩이 좋은 코드인지를 압니다.\",\"렉시컬 환경의 이해와 그에 맞는 코드 스타일 구사합니다.\",\"구현에 있어 브라우저 렌더링, 렌더 트리에 대한 내용을 고려합니다.\"]},{\"title\":\"TypeScript\",\"description\":[\"기본 타입, 이넘, 인터페이스, 제너릭, 클래스 등 기본적인 TypeScript를 구사합니다.\",\"유틸 타입(Pick, Omit, Patial)을 구사합니다.\",\"라이브러리를 사용함에 있어서 타입을 부여합니다.\"]},{\"title\":\"React\",\"description\":[\"주요 핵심 개념인 props, state, 렌더링의 상관관계를 알고 개발합니다.\",\"작은 단위로 컴포넌트를 구성해 재사용성을 높입니다.\",\"Redux 같은 상태 관리 라이브러리를 이용해 전역 상태 관리 및 데이터 모델링을 할 수 있습니다.\"]},{\"title\":\"CSS\",\"description\":[\"원하는 UI를 만들 수 있고 CSS 박스 설계에 익숙합니다.\",\"CSS 3D를 다루고 인터랙티브한 UI/UX를 구사합니다.\",\"Sass와 같은 CSS 확장 언어를 사용합니다.\"]}]}');\n\n//# sourceURL=webpack://friendly-resume/./public/resume.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;