exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 5480:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "PostGrid_section__d9ETB",
	"section_title": "PostGrid_section_title__SbdJM",
	"ul": "PostGrid_ul__M04p9"
};


/***/ }),

/***/ 3169:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "PostCard_link__8DwL0",
	"img": "PostCard_img__TcOMi",
	"info_container": "PostCard_info_container__rt9mx"
};


/***/ }),

/***/ 7309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ FeaturedPosts_FeaturedPosts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/service/posts.ts
var service_posts = __webpack_require__(8957);
// EXTERNAL MODULE: ./src/components/About/FeaturedPosts/PostGrid.module.scss
var PostGrid_module = __webpack_require__(5480);
var PostGrid_module_default = /*#__PURE__*/__webpack_require__.n(PostGrid_module);
// EXTERNAL MODULE: ./src/components/PostCard/PostCard.tsx
var PostCard = __webpack_require__(1414);
;// CONCATENATED MODULE: ./src/components/About/FeaturedPosts/PostsGrid.tsx



const PostsGrid = ({ posts })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (PostGrid_module_default()).ul,
        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (PostGrid_module_default()).li,
                children: /*#__PURE__*/ jsx_runtime_.jsx(PostCard/* default */.Z, {
                    post: post
                })
            }, post.path))
    });
};
/* harmony default export */ const FeaturedPosts_PostsGrid = (PostsGrid);

;// CONCATENATED MODULE: ./src/components/About/FeaturedPosts/FeaturedPosts.tsx




const FeaturedPosts = async ()=>{
    const posts = await (0,service_posts/* getFeaturedPosts */.mH)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (PostGrid_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (PostGrid_module_default()).section_title,
                children: "Featured Posts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturedPosts_PostsGrid, {
                posts: posts
            })
        ]
    });
};
/* harmony default export */ const FeaturedPosts_FeaturedPosts = (FeaturedPosts);


/***/ }),

/***/ 1414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(993);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3169);
/* harmony import */ var _PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const PostCard = ({ post })=>{
    const { title, description, date, category, path } = post;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/posts/${path}`,
        className: (_PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: `/images/posts/${path}.png`,
                alt: title,
                className: (_PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img),
                sizes: "100vw",
                width: "0",
                height: "0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_PostCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().info_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                children: date.toString()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: category
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: description
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);


/***/ }),

/***/ 8957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mH: () => (/* binding */ getFeaturedPosts),
/* harmony export */   no: () => (/* binding */ getRecentPosts)
/* harmony export */ });
/* unused harmony export getAllPosts */
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const getAllPosts = async ()=>{
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data", "posts.json");
    return (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(filePath, "utf-8").then(JSON.parse).then((posts)=>posts.sort((a, b)=>a.date > b.date ? -1 : 1));
};
const getFeaturedPosts = async ()=>{
    return getAllPosts() //
    .then((posts)=>posts.filter((post)=>post.featured));
};
const getRecentPosts = async ()=>{
    return getAllPosts() //
    .then((posts)=>posts.filter((post)=>post.featured).slice(0, 3));
};


/***/ })

};
;