exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 2270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 6371:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3912, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9301));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2008));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9594));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4081))

/***/ }),

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NavCategory_NavCategory)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/svg/Apple.svg
/* harmony default export */ const Apple = ({"src":"/_next/static/media/Apple.8e904013.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Caret.svg
/* harmony default export */ const Caret = ({"src":"/_next/static/media/Caret.f0ad0bea.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Codepen.svg
/* harmony default export */ const Codepen = ({"src":"/_next/static/media/Codepen.2aae76e2.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Flutter.svg
/* harmony default export */ const Flutter = ({"src":"/_next/static/media/Flutter.93fd3165.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Git.svg
/* harmony default export */ const Git = ({"src":"/_next/static/media/Git.4d7cc96e.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Javascript.svg
/* harmony default export */ const Javascript = ({"src":"/_next/static/media/Javascript.b537477c.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Mysql.svg
/* harmony default export */ const Mysql = ({"src":"/_next/static/media/Mysql.6701e598.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Nextjs.svg
/* harmony default export */ const Nextjs = ({"src":"/_next/static/media/Nextjs.7fd98378.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Reactjs.svg
/* harmony default export */ const Reactjs = ({"src":"/_next/static/media/Reactjs.80c4bf2c.svg","height":800,"width":800,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Sass.svg
/* harmony default export */ const Sass = ({"src":"/_next/static/media/Sass.f2feabc3.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Typescript.svg
/* harmony default export */ const Typescript = ({"src":"/_next/static/media/Typescript.8cc93562.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/NavCategory/NavCategory.module.scss
var NavCategory_module = __webpack_require__(7225);
var NavCategory_module_default = /*#__PURE__*/__webpack_require__.n(NavCategory_module);
;// CONCATENATED MODULE: ./src/components/NavCategory/NavCategory.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













const NavCategory = ()=>{
    const svgList = [
        Javascript,
        Sass,
        Codepen,
        Reactjs,
        Nextjs,
        Typescript,
        Git,
        Mysql,
        Flutter,
        Apple
    ];
    const datasFromJson = __webpack_require__(1676);
    console.log(datasFromJson);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (NavCategory_module_default()).nav_category,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (NavCategory_module_default()).total,
                children: [
                    "TOTAL ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "1,234"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (NavCategory_module_default()).btn_container,
                children: datasFromJson.map((el)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (NavCategory_module_default()).title,
                                children: el.class
                            }),
                            el.menu.map((menu)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: (NavCategory_module_default()).open_category_btn,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: Javascript,
                                                    alt: menu.svg,
                                                    width: 25,
                                                    height: 25
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: menu.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (NavCategory_module_default()).caret,
                                            src: Caret,
                                            alt: "Caret",
                                            width: 20,
                                            height: 20
                                        })
                                    ]
                                }))
                        ]
                    }))
            })
        ]
    });
};
/* harmony default export */ const NavCategory_NavCategory = (NavCategory);


/***/ }),

/***/ 8259:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "layout_body__0PUh0",
	"main": "layout_main__Hcx_E"
};


/***/ }),

/***/ 6745:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Q5T55"
};


/***/ }),

/***/ 6009:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Nav_header__H7vAt",
	"profile": "Nav_profile__sdGp5",
	"img": "Nav_img__RfcfG",
	"myself": "Nav_myself__2NWW6",
	"name_container": "Nav_name_container__uZ_Yd",
	"link_container": "Nav_link_container__8wiF8",
	"svg_container": "Nav_svg_container__hyaU6",
	"posts": "Nav_posts__HdF5d",
	"total": "Nav_total__HA664"
};


/***/ }),

/***/ 7225:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_category": "NavCategory_nav_category__yLiJD",
	"total": "NavCategory_total__z3B8v",
	"btn_container": "NavCategory_btn_container__Y_ReH",
	"title": "NavCategory_title__s7Mxz",
	"open_category_btn": "NavCategory_open_category_btn__wdDf0",
	"caret": "NavCategory_caret__tZcHT"
};


/***/ }),

/***/ 6201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  maple: () => (/* reexport */ (MaplestoryLight_otf_variableName_maple_default())),
  metadata: () => (/* binding */ metadata),
  sans: () => (/* reexport */ (layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_default()))
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Open_Sans","arguments":[{"subsets":["latin"]}],"variableName":"sans"}
var layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_ = __webpack_require__(3232);
var layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Open_Sans_arguments_subsets_latin_variableName_sans_);
// EXTERNAL MODULE: ./node_modules/next/font/local/target.css?{"path":"src/app/layout.tsx","import":"","arguments":[{"src":"../../public/fonts/MaplestoryLight.otf"}],"variableName":"maple"}
var MaplestoryLight_otf_variableName_maple_ = __webpack_require__(4655);
var MaplestoryLight_otf_variableName_maple_default = /*#__PURE__*/__webpack_require__.n(MaplestoryLight_otf_variableName_maple_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/NavCategory/NavCategory.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/hanjinsung/Desktop/blog_nextJS/src/components/NavCategory/NavCategory.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const NavCategory = (__default__);
;// CONCATENATED MODULE: ./public/svg/House.svg
/* harmony default export */ const House = ({"src":"/_next/static/media/House.93a0f32c.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/MagnifyGlass.svg
/* harmony default export */ const MagnifyGlass = ({"src":"/_next/static/media/MagnifyGlass.4298ffc9.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/svg/Person.svg
/* harmony default export */ const Person = ({"src":"/_next/static/media/Person.c119f49d.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/Nav/Nav.module.scss
var Nav_module = __webpack_require__(6009);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: ./src/components/Nav/Nav.tsx








const Nav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Nav_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Nav_module_default()).profile,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Nav_module_default()).img
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Nav_module_default()).myself
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Nav_module_default()).name_container,
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
                        className: (Nav_module_default()).link_container,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Nav_module_default()).svg_container,
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
            /*#__PURE__*/ jsx_runtime_.jsx(NavCategory, {})
        ]
    });
};
/* harmony default export */ const Nav_Nav = (Nav);

// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(6745);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footer,
        children: "Footer will be soon"
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./src/app/layout.module.scss
var layout_module = __webpack_require__(8259);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (MaplestoryLight_otf_variableName_maple_default()).className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_module_default()).body,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Nav_Nav, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                    className: (layout_module_default()).main,
                    children: [
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                    ]
                })
            ]
        })
    });
}




/***/ }),

/***/ 9301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/House.93a0f32c.svg","height":22,"width":22,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2008:
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

/***/ }),

/***/ 1676:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"class":"Web","menu":[{"title":"JavaScript","svg":"Javascript"},{"title":"React Js","svg":"Reactjs"},{"title":"Next Js","svg":"Nextjs"},{"title":"TypeScript","svg":"Typescript"}]},{"class":"Style Sheet","menu":[{"title":"CSS","svg":"Css"},{"title":"Sass","svg":"Sass"}]},{"class":"Open Source","menu":[{"title":"Open Source","svg":"Codepen"}]},{"class":"App","menu":[{"title":"Flutter","svg":"Flutter"},{"title":"IOS","svg":"Apple"}]},{"class":"DB","menu":[{"title":"MySQL","svg":"Mysql"}]},{"class":"DevOps","menu":[{"title":"GIT","svg":"Git"}]}]');

/***/ })

};
;