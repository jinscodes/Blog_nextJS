exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 92270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 60996:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 12008));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9594));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99301));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 63912, 23))

/***/ }),

/***/ 48259:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "layout_body__0PUh0",
	"main": "layout_main__Hcx_E"
};


/***/ }),

/***/ 45697:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3RG80",
	"profile": "header_profile__kf1if",
	"img": "header_img__emyvu",
	"myself": "header_myself__SF5mB",
	"name_container": "header_name_container__bz5RF",
	"link_container": "header_link_container__MiDfH",
	"svg_container": "header_svg_container__R45eP",
	"posts": "header_posts__G5j6n",
	"total": "header_total__FmjS9"
};


/***/ }),

/***/ 39979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Open_Sans","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_ = __webpack_require__(83232);
var layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(10993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/svg/House.svg
/* harmony default export */ const House = ({"src":"/_next/static/media/House.93a0f32c.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/MagnifyGlass.svg
/* harmony default export */ const MagnifyGlass = ({"src":"/_next/static/media/MagnifyGlass.4298ffc9.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Person.svg
/* harmony default export */ const Person = ({"src":"/_next/static/media/Person.c119f49d.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/Header/header.module.scss
var header_module = __webpack_require__(45697);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/Header/Header.tsx







const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (header_module_default()).profile,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).img
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).myself
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).name_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Jay Han\uD83E\uDDD1\uD83C\uDFFB‍\uD83D\uDCBB"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "제이_"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (header_module_default()).link_container,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).svg_container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: House,
                                        alt: "house"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: Person,
                                        alt: "person"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: MagnifyGlass,
                                    alt: "manifyGlass"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (header_module_default()).posts,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (header_module_default()).total,
                    children: [
                        "TOTAL ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "1,234"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./src/app/layout.module.scss
var layout_module = __webpack_require__(48259);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_default()).className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_module_default()).body,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: (layout_module_default()).main,
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 99301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/House.93a0f32c.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 12008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/MagnifyGlass.4298ffc9.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 9594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Person.c119f49d.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});

/***/ })

};
;