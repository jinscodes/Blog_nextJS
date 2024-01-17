exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 43518:
/***/ ((module) => {

// Exports
module.exports = {
	"styled_underline": "ClassificationText_styled_underline__PcPff",
	"underline_container": "ClassificationText_underline_container__0C2Hx",
	"underline": "ClassificationText_underline__Ys_BX",
	"left_bar": "ClassificationText_left_bar__KtBTm",
	"right_bar": "ClassificationText_right_bar__3odsU"
};


/***/ }),

/***/ 23669:
/***/ ((module) => {

// Exports
module.exports = {
	"all_post": "AllPosts_all_post__yXPwI",
	"postcard_container": "AllPosts_postcard_container__zbxeV"
};


/***/ }),

/***/ 80316:
/***/ ((module) => {

// Exports
module.exports = {
	"post_card": "PostCard_post_card__gqqNr",
	"img": "PostCard_img__JvBoD",
	"contents_container": "PostCard_contents_container__IxE_e",
	"category": "PostCard_category___Eb16",
	"title": "PostCard_title__czxsS",
	"description": "PostCard_description__3_Nc1"
};


/***/ }),

/***/ 87175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AllPost_AllPosts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/ClassificationText/ClassificationText.module.scss
var ClassificationText_module = __webpack_require__(43518);
var ClassificationText_module_default = /*#__PURE__*/__webpack_require__.n(ClassificationText_module);
;// CONCATENATED MODULE: ./src/components/ClassificationText/ClassificationText.tsx


const ClassificationText = ({ content })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ClassificationText_module_default()).styled_underline,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ClassificationText_module_default()).underline_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ClassificationText_module_default()).left_bar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ClassificationText_module_default()).underline
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ClassificationText_module_default()).right_bar
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ClassificationText_ClassificationText = (ClassificationText);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(10993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(34834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/CategoryPill/CategoryPill.tsx
var CategoryPill = __webpack_require__(93228);
// EXTERNAL MODULE: ./src/components/ProfileAndId/ProfileAndId.tsx
var ProfileAndId = __webpack_require__(89420);
// EXTERNAL MODULE: ./src/components/Post/PostCard/PostCard.module.scss
var PostCard_module = __webpack_require__(80316);
var PostCard_module_default = /*#__PURE__*/__webpack_require__.n(PostCard_module);
;// CONCATENATED MODULE: ./src/components/Post/PostCard/PostCard.tsx






const PostCard = ({ post })=>{
    const { title, path, description, category, date } = post;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/posts/${category}/${path}`,
        className: (PostCard_module_default()).post_card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `/images/posts/${path}.png`,
                alt: path,
                className: (PostCard_module_default()).img,
                sizes: "auto",
                width: 0,
                height: 0
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PostCard_module_default()).contents_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (PostCard_module_default()).category,
                        children: category.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx(CategoryPill/* default */.Z, {
                                category: el
                            }, el))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PostCard_module_default()).title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PostCard_module_default()).description,
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProfileAndId/* default */.Z, {
                        date: date,
                        size: "sm"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const PostCard_PostCard = (PostCard);

// EXTERNAL MODULE: ./src/components/Post/AllPost/AllPosts.module.scss
var AllPosts_module = __webpack_require__(23669);
var AllPosts_module_default = /*#__PURE__*/__webpack_require__.n(AllPosts_module);
;// CONCATENATED MODULE: ./src/components/Post/AllPost/AllPosts.tsx




const AllPosts = ({ posts, title })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (AllPosts_module_default()).all_post,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ClassificationText_ClassificationText, {
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (AllPosts_module_default()).postcard_container,
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(PostCard_PostCard, {
                            post: post
                        })
                    }))
            })
        ]
    });
};
/* harmony default export */ const AllPost_AllPosts = (AllPosts);


/***/ })

};
;