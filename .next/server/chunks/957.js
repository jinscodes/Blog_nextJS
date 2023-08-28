"use strict";
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 38957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AU: () => (/* binding */ getPostData),
/* harmony export */   Bd: () => (/* binding */ getAllPosts),
/* harmony export */   mH: () => (/* binding */ getFeaturedPosts)
/* harmony export */ });
/* unused harmony export getRecentPosts */
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
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
const getPostData = async (fileName)=>{
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data", "posts", `${fileName}.md`);
    const posts = await getAllPosts(); //
    const post = posts.find((post)=>post.path === fileName);
    if (!post) throw Error(`Can't not find the post: ${fileName}`);
    const index = posts.indexOf(post);
    const prev = index > 0 ? posts[index - 1] : null;
    const next = index < posts.length ? posts[index + 1] : null;
    const content = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(filePath, "utf-8");
    return {
        ...post,
        content,
        next,
        prev
    };
};


/***/ })

};
;