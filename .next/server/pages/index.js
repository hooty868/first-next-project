module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "A3pG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__("leqP");

// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__("RPSF");
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);

// CONCATENATED MODULE: ./components/meetups/MeetupItem.js






function MeetupItem(props) {
  const router = Object(router_["useRouter"])();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
    className: MeetupItem_module_default.a.item,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupItem_module_default.a.image,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: MeetupItem_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: props.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("address", {
          children: props.address
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: MeetupItem_module_default.a.actions,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: showDetailHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ var meetups_MeetupItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__("A3pG");
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);

// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: MeetupList_module_default.a.list,
    children: props.meetups.map(meetup => /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupItem, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id))
  });
}

/* harmony default export */ var meetups_MeetupList = (MeetupList);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/index.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // const DUMMY_data = [
//   {
//     id: "1",
//     title: "a first meetup",
//     image:
//       "https://images.unsplash.com/photo-1633119446564-877e2c2ae501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//     address: "123:ghj:acdfee",
//     description: "this is something good",
//   },
//   {
//     id: "2",
//     title: "a second meetup",
//     image:
//       "https://images.unsplash.com/photo-1638398921635-031fc290c29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//     address: "456:qweqwe:acdfee",
//     description: "this is something wrong",
//   },
// ];

const HomePage = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "React Meetups"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "a example for next project,and very useful"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(meetups_MeetupList, {
      meetups: props.meetups
    })]
  });
};

async function getServerSideProps(context) {
  const client = await external_mongodb_["MongoClient"].connect("mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray();
  console.log(data);
  client.close();
  return {
    props: {
      meetups: data.map(item => {
        return _objectSpread(_objectSpread({}, item), {}, {
          _id: item._id.toString(),
          id: item._id.toString()
        });
      })
    }
  };
} // export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const data = await meetupsCollection.find().toArray();
//   client.close();
//   return {
//     props: {
//       meetups: data.map((item) => {
//         return { ...item, _id: item._id.toString(), id: item._id.toString() };
//       }),
//     },
//     revalidate: 3600,
//   };
// }

/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "RPSF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "leqP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rQAc");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



function Card(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "rQAc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });