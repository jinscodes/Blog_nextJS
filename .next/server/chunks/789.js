exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 9770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5287);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3519);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5373);
/* harmony import */ var _components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9152);
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3979);
/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Carousel = ({ posts })=>{
    console.log(posts);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .tq, {
        className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6___default().swiper),
        spaceBetween: 50,
        slidesPerView: 3,
        modules: [
            swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_
        ],
        navigation: true,
        children: posts.map((data, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o5, {
                className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_6___default().swiper_slider),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    post: data
                })
            }, idx))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ 4917:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel_container": "FeaturedPosts_carousel_container__QUJOP",
	"postsContainer": "FeaturedPosts_postsContainer__LsPV5",
	"title": "FeaturedPosts_title__h3l17"
};


/***/ }),

/***/ 3979:
/***/ ((module) => {

// Exports
module.exports = {
	"swiper": "Carousel_swiper__EYDtj",
	"swiper_slider": "Carousel_swiper_slider__PL8CS"
};


/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ FeaturedPosts_FeaturedPosts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/Carousel/Carousel.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/hanjinsung/Desktop/blog_nextJS/src/components/Carousel/Carousel.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Carousel = (__default__);
// EXTERNAL MODULE: ./src/service/posts.ts
var service_posts = __webpack_require__(8957);
// EXTERNAL MODULE: ./src/components/About/FeaturedPosts/FeaturedPosts.module.scss
var FeaturedPosts_module = __webpack_require__(4917);
var FeaturedPosts_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedPosts_module);
;// CONCATENATED MODULE: ./src/components/About/FeaturedPosts/FeaturedPosts.tsx




const FeaturedPosts = async ()=>{
    const posts = await (0,service_posts/* getFeaturedPosts */.mH)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (FeaturedPosts_module_default()).carousel_container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (FeaturedPosts_module_default()).postsContainer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: (FeaturedPosts_module_default()).title,
                    children: "Featured Posts"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                    posts: posts
                })
            ]
        })
    });
};
/* harmony default export */ const FeaturedPosts_FeaturedPosts = (FeaturedPosts);


/***/ })

};
;