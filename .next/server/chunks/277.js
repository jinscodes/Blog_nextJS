exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 32798:
/***/ ((module) => {

// Exports
module.exports = {
	"category": "CategoryPill_category__2utt9"
};


/***/ }),

/***/ 34530:
/***/ ((module) => {

// Exports
module.exports = {
	"info": "ProfileAndId_info__9z_AU",
	"profile": "ProfileAndId_profile__Rv8AT",
	"sm_font": "ProfileAndId_sm_font__mnYLs",
	"date": "ProfileAndId_date__u68_N",
	"sm_date": "ProfileAndId_sm_date__S_xgC"
};


/***/ }),

/***/ 93228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CategoryPill_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32798);
/* harmony import */ var _CategoryPill_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CategoryPill_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const CategoryPill = ({ category })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_CategoryPill_module_scss__WEBPACK_IMPORTED_MODULE_1___default().category),
        children: category
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPill);


/***/ }),

/***/ 89420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34530);
/* harmony import */ var _ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const ProfileAndId = ({ date, size })=>{
    const convertSize = {
        sm: "30px"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default().info),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default().profile),
                        style: size && {
                            width: convertSize[size],
                            height: convertSize[size]
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `${size === "sm" && (_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sm_font)}`,
                        children: "Jay_H"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `${size === "sm" ? (_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default().sm_date) : (_ProfileAndId_module_scss__WEBPACK_IMPORTED_MODULE_1___default().date)}`,
                children: date.toString()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAndId);


/***/ })

};
;