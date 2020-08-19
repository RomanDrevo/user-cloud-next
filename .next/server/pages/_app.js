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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: loginApi, fetchUsersApi, deleteUserApi, createUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginApi", function() { return loginApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersApi", function() { return fetchUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserApi", function() { return deleteUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserApi", function() { return createUserApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const baseUrl = process.env.REACT_APP_API_URL || '';
const loginUrl = process.env.REACT_APP_LOGIN_URL || '';

const {
  apiURLs
} = __webpack_require__(/*! ../config */ "./src/config.js"); // const env = process.env.ENVIRONMENT || 'local';


console.log(apiURLs);
const {
  BASE_URL: apiUrl
} = apiURLs;
axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.baseURL = apiUrl;
  return config;
});
const loginApi = () => {
  // const {username, password} = data;
  const data = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${loginUrl}/api/login`, data);
};
const fetchUsersApi = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/cyberhat_users');
};
const deleteUserApi = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('/cyberhat_users', {
    data: {
      objectId: data.payload
    }
  });
};
const createUserApi = data => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/cyberhat_users', _objectSpread({}, data.payload));
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const apiURLs = {
  BASE_URL: 'https://api.backendless.com/525C6ECF-BE35-D74F-FFC7-777E0FA29F00/3777A415-DFD8-4240-B51A-DCE496757AB7/data'
};
module.exports = {
  apiURLs
};

/***/ }),

/***/ "./src/css/App.scss":
/*!**************************!*\
  !*** ./src/css/App.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _store_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/saga */ "./src/store/saga/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/App.scss */ "./src/css/App.scss");
/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_App_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Roman\\code\\user-cloud-next\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(),
      middlewares = [sagaMiddleware],
      store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_8__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(...middlewares)));
sagaMiddleware.run(_store_saga__WEBPACK_IMPORTED_MODULE_7__["watchSaga"]);

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}; //Anything returned here can be access by the client

    return {
      pageProps: pageProps
    };
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_App_scss__WEBPACK_IMPORTED_MODULE_9___default.a['app-wrapper'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }))));
  }

} //makeStore function that returns a new store for every request


const makeStore = () => store;

console.log('----store: ', store); //withRedux wrapper that passes the store to the App Component

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(makeStore)(MyApp));

/***/ }),

/***/ "./src/store/actions/alertActions.js":
/*!*******************************************!*\
  !*** ./src/store/actions/alertActions.js ***!
  \*******************************************/
/*! exports provided: setAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlert", function() { return setAlert; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");

const setAlert = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ALERT,
    payload: data
  };
};

/***/ }),

/***/ "./src/store/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/store/actions/authActions.js ***!
  \******************************************/
/*! exports provided: login, logout, setIsAuthenticated, loginSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsAuthenticated", function() { return setIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");

const login = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIN,
    payload: data
  };
};
const logout = () => ({
  type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT
});
const setIsAuthenticated = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_IS_AUTHENTICATED,
    payload: data
  };
};
const loginSuccess = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIN_SUCCESS,
    payload: data
  };
};

/***/ }),

/***/ "./src/store/actions/uIStateActions.js":
/*!*********************************************!*\
  !*** ./src/store/actions/uIStateActions.js ***!
  \*********************************************/
/*! exports provided: setLoading, toggleDeleteUserModal, openNotification, closeNotification, toggleErrorWindowIsOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDeleteUserModal", function() { return toggleDeleteUserModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openNotification", function() { return openNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeNotification", function() { return closeNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleErrorWindowIsOpen", function() { return toggleErrorWindowIsOpen; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");

const setLoading = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_LOADING,
    payload: data
  };
};
const toggleDeleteUserModal = () => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_DELETE_USER_MODAL
  };
};
const openNotification = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_NOTIFICATION,
    payload: data
  };
};
const closeNotification = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_NOTIFICATION,
    payload: data
  };
};
const toggleErrorWindowIsOpen = () => ({
  type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_ERROR_WINDOW_IS_OPEN
});

/***/ }),

/***/ "./src/store/actions/usersActions.js":
/*!*******************************************!*\
  !*** ./src/store/actions/usersActions.js ***!
  \*******************************************/
/*! exports provided: fetchUsers, setUsersToStore, deleteUser, deleteUserSuccess, createUser, updateSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsersToStore", function() { return setUsersToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function() { return deleteUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearch", function() { return updateSearch; });
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");

const fetchUsers = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_USERS,
    payload: data
  };
};
const setUsersToStore = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_USERS_TO_STORE,
    payload: data
  };
};
const deleteUser = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER,
    payload: data
  };
};
const deleteUserSuccess = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_SUCCESS,
    payload: data
  };
};
const createUser = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CREATE_USER,
    payload: data
  };
};
const updateSearch = data => {
  return {
    type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_SEARCH,
    payload: data
  };
};

/***/ }),

/***/ "./src/store/actionsTypes.js":
/*!***********************************!*\
  !*** ./src/store/actionsTypes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LOGIN = 'LOGIN',
      LOG_OUT = 'LOG_OUT',
      SET_LOADING = 'SET_LOADING',
      SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED',
      LOGIN_SUCCESS = 'LOGIN_SUCCESS',
      FETCH_USERS = 'FETCH_USERS',
      DELETE_USER = 'DELETE_USER',
      DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
      TOGGLE_DELETE_USER_MODAL = 'TOGGLE_DELETE_USER_MODAL',
      OPEN_NOTIFICATION = 'OPEN_NOTIFICATION',
      CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION',
      SET_ALERT = 'SET_ALERT',
      TOGGLE_ERROR_WINDOW_IS_OPEN = 'TOGGLE_ERROR_WINDOW_IS_OPEN',
      CREATE_USER = 'CREATE_USER',
      SET_NEW_USER_TO_STORE = 'SET_NEW_USER_TO_STORE',
      UPDATE_SEARCH = 'UPDATE_SEARCH',
      SET_USERS_TO_STORE = 'SET_USERS_TO_STORE';
/* harmony default export */ __webpack_exports__["default"] = ({
  LOGIN,
  LOG_OUT,
  SET_LOADING,
  SET_IS_AUTHENTICATED,
  CLOSE_NOTIFICATION,
  LOGIN_SUCCESS,
  SET_USERS_TO_STORE,
  FETCH_USERS,
  DELETE_USER,
  SET_NEW_USER_TO_STORE,
  CREATE_USER,
  DELETE_USER_SUCCESS,
  OPEN_NOTIFICATION,
  SET_ALERT,
  TOGGLE_ERROR_WINDOW_IS_OPEN,
  TOGGLE_DELETE_USER_MODAL,
  UPDATE_SEARCH
});

/***/ }),

/***/ "./src/store/reducers/alertReducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/alertReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReducer */ "./src/store/reducers/createReducer.js");
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");


const initialState = {
  status: null,
  // error | warning | default,
  title: '',
  message: ''
};
const alertReducer = Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, {
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["default"].SET_ALERT]: (state, {
    payload
  }) => {
    if (!payload) payload = {};
    const {
      status = null,
      title = '',
      message = ''
    } = payload;
    return {
      status,
      title,
      message
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (alertReducer);

/***/ }),

/***/ "./src/store/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducer */ "./src/store/reducers/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  status: null,
  serverError: null,
  userEmail: null,
  isAuthenticated: ''
};
const authReducer = Object(_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, {
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIN_SUCCESS]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isAuthenticated: true,
      userEmail: payload
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOG_OUT]: state => {
    localStorage.removeItem('token');
    return _objectSpread(_objectSpread({}, state), {}, {
      isAuthenticated: false
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_IS_AUTHENTICATED]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isAuthenticated: payload
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/store/reducers/createReducer.js":
/*!*********************************************!*\
  !*** ./src/store/reducers/createReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_uIStateReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/uIStateReducer */ "./src/store/reducers/uIStateReducer.js");
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/authReducer */ "./src/store/reducers/authReducer.js");
/* harmony import */ var _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/usersReducer */ "./src/store/reducers/usersReducer.js");
/* harmony import */ var _reducers_alertReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/alertReducer */ "./src/store/reducers/alertReducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  uIStateReducer: _reducers_uIStateReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  authReducer: _reducers_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  usersReducer: _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  alertReducer: _reducers_alertReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/uIStateReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducers/uIStateReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducer */ "./src/store/reducers/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isLoading: false,
  isErrorWindowOpen: false,
  isModalVisible: false,
  isNotificationOpen: false,
  notificationMessage: ''
};
const UIStateReducer = Object(_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, {
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_LOADING]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isLoading: payload
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_DELETE_USER_MODAL]: state => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isModalVisible: !state.isModalVisible
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_NOTIFICATION]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isNotificationOpen: true,
      notificationMessage: payload
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_NOTIFICATION]: state => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isNotificationOpen: false,
      notificationMessage: ''
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TOGGLE_ERROR_WINDOW_IS_OPEN]: state => {
    return _objectSpread(_objectSpread({}, state), {}, {
      isErrorWindowOpen: !state.isErrorWindowOpen
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (UIStateReducer);

/***/ }),

/***/ "./src/store/reducers/usersReducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/usersReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");
/* harmony import */ var _reducers_createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/createReducer */ "./src/store/reducers/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  users: [],
  searchText: ''
};
const usersReducer = Object(_reducers_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, {
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_USERS_TO_STORE]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      users: payload
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_SUCCESS]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      users: state.users.filter(user => user.objectId !== payload)
    });
  },
  [_actionsTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_SEARCH]: (state, {
    payload
  }) => {
    return _objectSpread(_objectSpread({}, state), {}, {
      searchText: payload
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (usersReducer);

/***/ }),

/***/ "./src/store/saga/index.js":
/*!*********************************!*\
  !*** ./src/store/saga/index.js ***!
  \*********************************/
/*! exports provided: watchSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSaga", function() { return watchSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionsTypes */ "./src/store/actionsTypes.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagas */ "./src/store/saga/sagas.js");



function* watchSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN, _sagas__WEBPACK_IMPORTED_MODULE_2__["loginSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["default"].FETCH_USERS, _sagas__WEBPACK_IMPORTED_MODULE_2__["fetchUsersSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_USER, _sagas__WEBPACK_IMPORTED_MODULE_2__["deleteUserSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionsTypes__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_USER, _sagas__WEBPACK_IMPORTED_MODULE_2__["createUserSaga"]);
}

/***/ }),

/***/ "./src/store/saga/sagas.js":
/*!*********************************!*\
  !*** ./src/store/saga/sagas.js ***!
  \*********************************/
/*! exports provided: loginSaga, fetchUsersSaga, deleteUserSaga, createUserSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSaga", function() { return loginSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersSaga", function() { return fetchUsersSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserSaga", function() { return deleteUserSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserSaga", function() { return createUserSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/uIStateActions */ "./src/store/actions/uIStateActions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/authActions */ "./src/store/actions/authActions.js");
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/usersActions */ "./src/store/actions/usersActions.js");
/* harmony import */ var _actions_alertActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/alertActions */ "./src/store/actions/alertActions.js");
/* harmony import */ var _utils_constatns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/constatns */ "./src/utils/constatns.js");







function* loginSaga(data) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(true));
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["loginApi"], data.payload);

    if (response.status === 200 && response.data.token) {
      localStorage.setItem('token', response.data.token);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_3__["loginSuccess"])(data.payload.email));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
  } catch (error) {
    console.log('---e:', error);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_alertActions__WEBPACK_IMPORTED_MODULE_5__["setAlert"])({
      status: 'error',
      title: 'Error',
      message: error.message
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["toggleErrorWindowIsOpen"])());
  }
}
function* fetchUsersSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(true));
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["fetchUsersApi"]);

    if (response.status === 200 && response.data) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_4__["setUsersToStore"])(response.data));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_alertActions__WEBPACK_IMPORTED_MODULE_5__["setAlert"])({
      status: 'error',
      title: 'Error',
      message: error.message
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["toggleErrorWindowIsOpen"])());
  }
}
function* deleteUserSaga(data) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(true));
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["deleteUserApi"], data);

    if (response.status === 200 && response.data.deletionTime) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_4__["deleteUserSuccess"])(data.payload));
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["toggleDeleteUserModal"])());
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["openNotification"])(_utils_constatns__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATIONS"].delete));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_alertActions__WEBPACK_IMPORTED_MODULE_5__["setAlert"])({
      status: 'error',
      title: 'Error',
      message: error.message
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["toggleErrorWindowIsOpen"])());
  }
}
function* createUserSaga(data) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(true));
    const newUser = data.payload;
    newUser.id = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
    newUser.BirthDate = new Date(newUser.birthDate).getTime();
    delete newUser.birthDate;
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["createUserApi"], data);

    if (response.status === 200 && response.data) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["openNotification"])(_utils_constatns__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATIONS"].add));
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["setLoading"])(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_alertActions__WEBPACK_IMPORTED_MODULE_5__["setAlert"])({
      status: 'error',
      title: 'Error',
      message: error.message
    }));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_uIStateActions__WEBPACK_IMPORTED_MODULE_1__["toggleErrorWindowIsOpen"])());
  }
}

/***/ }),

/***/ "./src/utils/constatns.js":
/*!********************************!*\
  !*** ./src/utils/constatns.js ***!
  \********************************/
/*! exports provided: COLORS, NOTIFICATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS", function() { return NOTIFICATIONS; });
const COLORS = {
  green: '#00FFAF',
  red: '#FF1300',
  white: '#fff'
};
const NOTIFICATIONS = {
  delete: 'User has been removed!',
  add: 'User has been added!'
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy9hbGVydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvdUlTdGF0ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvdXNlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2FsZXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2NyZWF0ZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy91SVN0YXRlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zYWdhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zYWdhL3NhZ2FzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGF0bnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfVVJMIiwibG9naW5VcmwiLCJSRUFDVF9BUFBfTE9HSU5fVVJMIiwiYXBpVVJMcyIsInJlcXVpcmUiLCJsb2ciLCJCQVNFX1VSTCIsImFwaVVybCIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYmFzZVVSTCIsImxvZ2luQXBpIiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwiZmV0Y2hVc2Vyc0FwaSIsImdldCIsImRlbGV0ZVVzZXJBcGkiLCJkZWxldGUiLCJvYmplY3RJZCIsInBheWxvYWQiLCJjcmVhdGVVc2VyQXBpIiwibW9kdWxlIiwiZXhwb3J0cyIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJ3YXRjaFNhZ2EiLCJNeUFwcCIsImN0eCIsInByb3BzIiwic3R5bGUiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiLCJzZXRBbGVydCIsInR5cGUiLCJhY3Rpb25zVHlwZXMiLCJTRVRfQUxFUlQiLCJsb2dpbiIsInR5cGVzIiwiTE9HSU4iLCJsb2dvdXQiLCJMT0dfT1VUIiwic2V0SXNBdXRoZW50aWNhdGVkIiwiU0VUX0lTX0FVVEhFTlRJQ0FURUQiLCJsb2dpblN1Y2Nlc3MiLCJMT0dJTl9TVUNDRVNTIiwic2V0TG9hZGluZyIsIlNFVF9MT0FESU5HIiwidG9nZ2xlRGVsZXRlVXNlck1vZGFsIiwiVE9HR0xFX0RFTEVURV9VU0VSX01PREFMIiwib3Blbk5vdGlmaWNhdGlvbiIsIk9QRU5fTk9USUZJQ0FUSU9OIiwiY2xvc2VOb3RpZmljYXRpb24iLCJDTE9TRV9OT1RJRklDQVRJT04iLCJ0b2dnbGVFcnJvcldpbmRvd0lzT3BlbiIsIlRPR0dMRV9FUlJPUl9XSU5ET1dfSVNfT1BFTiIsImZldGNoVXNlcnMiLCJGRVRDSF9VU0VSUyIsInNldFVzZXJzVG9TdG9yZSIsIlNFVF9VU0VSU19UT19TVE9SRSIsImRlbGV0ZVVzZXIiLCJERUxFVEVfVVNFUiIsImRlbGV0ZVVzZXJTdWNjZXNzIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsImNyZWF0ZVVzZXIiLCJDUkVBVEVfVVNFUiIsInVwZGF0ZVNlYXJjaCIsIlVQREFURV9TRUFSQ0giLCJTRVRfTkVXX1VTRVJfVE9fU1RPUkUiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJhbGVydFJlZHVjZXIiLCJjcmVhdGVSZWR1Y2VyIiwic3RhdGUiLCJzZXJ2ZXJFcnJvciIsInVzZXJFbWFpbCIsImlzQXV0aGVudGljYXRlZCIsImF1dGhSZWR1Y2VyIiwicmVtb3ZlSXRlbSIsImhhbmRsZXJzIiwicmVkdWNlciIsImFjdGlvbiIsImhhc093blByb3BlcnR5IiwiY29tYmluZVJlZHVjZXJzIiwidUlTdGF0ZVJlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJpc0xvYWRpbmciLCJpc0Vycm9yV2luZG93T3BlbiIsImlzTW9kYWxWaXNpYmxlIiwiaXNOb3RpZmljYXRpb25PcGVuIiwibm90aWZpY2F0aW9uTWVzc2FnZSIsIlVJU3RhdGVSZWR1Y2VyIiwidXNlcnMiLCJzZWFyY2hUZXh0IiwiZmlsdGVyIiwidXNlciIsInRha2VFdmVyeSIsImxvZ2luU2FnYSIsImZldGNoVXNlcnNTYWdhIiwiZGVsZXRlVXNlclNhZ2EiLCJjcmVhdGVVc2VyU2FnYSIsInB1dCIsInJlc3BvbnNlIiwiY2FsbCIsInNldEl0ZW0iLCJlcnJvciIsImRlbGV0aW9uVGltZSIsIk5PVElGSUNBVElPTlMiLCJuZXdVc2VyIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJCaXJ0aERhdGUiLCJEYXRlIiwiYmlydGhEYXRlIiwiZ2V0VGltZSIsImFkZCIsIkNPTE9SUyIsImdyZWVuIiwicmVkIiwid2hpdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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QVQ7QUFPQSxVQUFNK0IsOERBQUcsQ0FBQ2pELHVGQUF1QixFQUF4QixDQUFUO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7QUM5R0Q7QUFBQTtBQUFBO0FBQU8sTUFBTWtFLE1BQU0sR0FBRztBQUNsQkMsT0FBSyxFQUFFLFNBRFc7QUFFbEJDLEtBQUcsRUFBRSxTQUZhO0FBR2xCQyxPQUFLLEVBQUU7QUFIVyxDQUFmO0FBTUEsTUFBTWQsYUFBYSxHQUFHO0FBQ3pCbEcsUUFBTSxFQUFFLHdCQURpQjtBQUV6QjRHLEtBQUcsRUFBRTtBQUZvQixDQUF0QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkwgfHwgJyc7XHJcbmNvbnN0IGxvZ2luVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0xPR0lOX1VSTCB8fCAnJztcclxuXHJcblxyXG5jb25zdCB7YXBpVVJMc30gPSByZXF1aXJlKCcuLi9jb25maWcnKTtcclxuLy8gY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuRU5WSVJPTk1FTlQgfHwgJ2xvY2FsJztcclxuXHJcbmNvbnNvbGUubG9nKGFwaVVSTHMpO1xyXG5jb25zdCB7IEJBU0VfVVJMOiBhcGlVcmwgfSA9IGFwaVVSTHNcclxuXHJcbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGNvbmZpZy5iYXNlVVJMID0gYXBpVXJsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BcGkgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB7dXNlcm5hbWUsIHBhc3N3b3JkfSA9IGRhdGE7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiAnZXZlLmhvbHRAcmVxcmVzLmluJyxcclxuICAgICAgICBwYXNzd29yZDogJ2NpdHlzbGlja2EnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7bG9naW5Vcmx9L2FwaS9sb2dpbmAsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNBcGkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvY3liZXJoYXRfdXNlcnMnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyQXBpID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvY3liZXJoYXRfdXNlcnMnLCB7ZGF0YToge29iamVjdElkOiBkYXRhLnBheWxvYWR9fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlckFwaSA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9jeWJlcmhhdF91c2VycycsIHsuLi5kYXRhLnBheWxvYWR9KTtcclxufTtcclxuIiwiY29uc3QgYXBpVVJMcyA9IHtcclxuICBCQVNFX1VSTDogJ2h0dHBzOi8vYXBpLmJhY2tlbmRsZXNzLmNvbS81MjVDNkVDRi1CRTM1LUQ3NEYtRkZDNy03NzdFMEZBMjlGMDAvMzc3N0E0MTUtREZEOC00MjQwLUI1MUEtRENFNDk2NzU3QUI3L2RhdGEnXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHthcGlVUkxzfTtcclxuIiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7d2F0Y2hTYWdhfSBmcm9tIFwiLi4vc3RvcmUvc2FnYVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9BcHAuc2Nzcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvaW5kZXguc2Nzcyc7XHJcblxyXG5jb25zdFxyXG4gICAgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpLFxyXG4gICAgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdLFxyXG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSk7XHJcblxyXG5cclxuc2FnYU1pZGRsZXdhcmUucnVuKHdhdGNoU2FnYSk7XHJcblxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LCBjdHh9KSB7XHJcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG5cclxuICAgICAgICAvL0FueXRoaW5nIHJldHVybmVkIGhlcmUgY2FuIGJlIGFjY2VzcyBieSB0aGUgY2xpZW50XHJcbiAgICAgICAgcmV0dXJuIHtwYWdlUHJvcHM6IHBhZ2VQcm9wc307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICAvL0luZm9ybWF0aW9uIHRoYXQgd2FzIHJldHVybmVkICBmcm9tICdnZXRJbml0aWFsUHJvcHMnIGFyZSBzdG9yZWQgaW4gdGhlIHByb3BzIGkuZS4gcGFnZVByb3BzXHJcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYXBwLXdyYXBwZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vbWFrZVN0b3JlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgcmVxdWVzdFxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuXHJcbmNvbnNvbGUubG9nKCctLS0tc3RvcmU6ICcsIHN0b3JlKTtcclxuXHJcbi8vd2l0aFJlZHV4IHdyYXBwZXIgdGhhdCBwYXNzZXMgdGhlIHN0b3JlIHRvIHRoZSBBcHAgQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuIiwiaW1wb3J0IGFjdGlvbnNUeXBlcyBmcm9tICcuLi9hY3Rpb25zVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEFsZXJ0ID0gZGF0YSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IGFjdGlvbnNUeXBlcy5TRVRfQUxFUlQsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHR5cGVzIGZyb20gJy4uL2FjdGlvbnNUeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBkYXRhID0+e1xyXG4gIHJldHVybntcclxuICAgIHR5cGU6IHR5cGVzLkxPR0lOLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKHt0eXBlOiB0eXBlcy5MT0dfT1VUfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SXNBdXRoZW50aWNhdGVkID0gZGF0YSA9PiB7XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogdHlwZXMuU0VUX0lTX0FVVEhFTlRJQ0FURUQsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3MgPSBkYXRhID0+IHtcclxuICByZXR1cm57XHJcbiAgICB0eXBlOiB0eXBlcy5MT0dJTl9TVUNDRVNTLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgdHlwZXMgZnJvbSAnLi4vYWN0aW9uc1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gZGF0YSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiB0eXBlcy5TRVRfTE9BRElORyxcclxuICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZURlbGV0ZVVzZXJNb2RhbCA9ICgpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlRPR0dMRV9ERUxFVEVfVVNFUl9NT0RBTFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuTm90aWZpY2F0aW9uID0gZGF0YSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiB0eXBlcy5PUEVOX05PVElGSUNBVElPTixcclxuICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsb3NlTm90aWZpY2F0aW9uID0gZGF0YSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiB0eXBlcy5DTE9TRV9OT1RJRklDQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVFcnJvcldpbmRvd0lzT3BlbiA9ICgpID0+ICh7dHlwZTogdHlwZXMuVE9HR0xFX0VSUk9SX1dJTkRPV19JU19PUEVOfSk7XHJcblxyXG4iLCJpbXBvcnQgdHlwZXMgZnJvbSAnLi4vYWN0aW9uc1R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gZGF0YSA9PntcclxuICByZXR1cm57XHJcbiAgICB0eXBlOiB0eXBlcy5GRVRDSF9VU0VSUyxcclxuICAgIHBheWxvYWQ6IGRhdGFcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXJzVG9TdG9yZSA9IGRhdGEgPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogdHlwZXMuU0VUX1VTRVJTX1RPX1NUT1JFLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGRhdGEgPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogdHlwZXMuREVMRVRFX1VTRVIsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyU3VjY2VzcyA9IGRhdGEgPT57XHJcbiAgcmV0dXJue1xyXG4gICAgdHlwZTogdHlwZXMuREVMRVRFX1VTRVJfU1VDQ0VTUyxcclxuICAgIHBheWxvYWQ6IGRhdGFcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSBkYXRhID0+e1xyXG4gIHJldHVybntcclxuICAgIHR5cGU6IHR5cGVzLkNSRUFURV9VU0VSLFxyXG4gICAgcGF5bG9hZDogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoID0gZGF0YSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9TRUFSQ0gsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufTtcclxuIiwiY29uc3RcclxuICAgIExPR0lOID0gJ0xPR0lOJyxcclxuICAgIExPR19PVVQgPSAnTE9HX09VVCcsXHJcbiAgICBTRVRfTE9BRElORyA9ICdTRVRfTE9BRElORycsXHJcbiAgICBTRVRfSVNfQVVUSEVOVElDQVRFRCA9ICdTRVRfSVNfQVVUSEVOVElDQVRFRCcsXHJcbiAgICBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnLFxyXG4gICAgRkVUQ0hfVVNFUlMgPSAnRkVUQ0hfVVNFUlMnLFxyXG4gICAgREVMRVRFX1VTRVIgPSAnREVMRVRFX1VTRVInLFxyXG4gICAgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJyxcclxuICAgIFRPR0dMRV9ERUxFVEVfVVNFUl9NT0RBTCA9ICdUT0dHTEVfREVMRVRFX1VTRVJfTU9EQUwnLFxyXG4gICAgT1BFTl9OT1RJRklDQVRJT04gPSAnT1BFTl9OT1RJRklDQVRJT04nLFxyXG4gICAgQ0xPU0VfTk9USUZJQ0FUSU9OID0gJ0NMT1NFX05PVElGSUNBVElPTicsXHJcbiAgICBTRVRfQUxFUlQgPSAnU0VUX0FMRVJUJyxcclxuICAgIFRPR0dMRV9FUlJPUl9XSU5ET1dfSVNfT1BFTiA9ICdUT0dHTEVfRVJST1JfV0lORE9XX0lTX09QRU4nLFxyXG4gICAgQ1JFQVRFX1VTRVIgPSAnQ1JFQVRFX1VTRVInLFxyXG4gICAgU0VUX05FV19VU0VSX1RPX1NUT1JFID0gJ1NFVF9ORVdfVVNFUl9UT19TVE9SRScsXHJcbiAgICBVUERBVEVfU0VBUkNIID0gJ1VQREFURV9TRUFSQ0gnLFxyXG4gICAgU0VUX1VTRVJTX1RPX1NUT1JFID0gJ1NFVF9VU0VSU19UT19TVE9SRSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBMT0dJTixcclxuICAgIExPR19PVVQsXHJcbiAgICBTRVRfTE9BRElORyxcclxuICAgIFNFVF9JU19BVVRIRU5USUNBVEVELFxyXG4gICAgQ0xPU0VfTk9USUZJQ0FUSU9OLFxyXG4gICAgTE9HSU5fU1VDQ0VTUyxcclxuICAgIFNFVF9VU0VSU19UT19TVE9SRSxcclxuICAgIEZFVENIX1VTRVJTLFxyXG4gICAgREVMRVRFX1VTRVIsXHJcbiAgICBTRVRfTkVXX1VTRVJfVE9fU1RPUkUsXHJcbiAgICBDUkVBVEVfVVNFUixcclxuICAgIERFTEVURV9VU0VSX1NVQ0NFU1MsXHJcbiAgICBPUEVOX05PVElGSUNBVElPTixcclxuICAgIFNFVF9BTEVSVCxcclxuICAgIFRPR0dMRV9FUlJPUl9XSU5ET1dfSVNfT1BFTixcclxuICAgIFRPR0dMRV9ERUxFVEVfVVNFUl9NT0RBTCxcclxuICAgIFVQREFURV9TRUFSQ0hcclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZVJlZHVjZXIgZnJvbSAnLi9jcmVhdGVSZWR1Y2VyJztcclxuaW1wb3J0IGFjdGlvbnNUeXBlcyBmcm9tICcuLi9hY3Rpb25zVHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHN0YXR1czogbnVsbCwgLy8gZXJyb3IgfCB3YXJuaW5nIHwgZGVmYXVsdCxcclxuICB0aXRsZTogJycsXHJcbiAgbWVzc2FnZTogJydcclxufTtcclxuXHJcbmNvbnN0IGFsZXJ0UmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgW2FjdGlvbnNUeXBlcy5TRVRfQUxFUlRdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICBpZiAoIXBheWxvYWQpIHBheWxvYWQgPSB7fTtcclxuICAgIGNvbnN0IHsgc3RhdHVzID0gbnVsbCwgdGl0bGUgPSAnJywgbWVzc2FnZSA9ICcnfSA9IHBheWxvYWQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxlcnRSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgYWN0aW9uc1R5cGVzIGZyb20gJy4uL2FjdGlvbnNUeXBlcyc7XHJcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4vY3JlYXRlUmVkdWNlcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzdGF0dXM6IG51bGwsXHJcbiAgICBzZXJ2ZXJFcnJvcjogbnVsbCxcclxuICAgIHVzZXJFbWFpbDogbnVsbCxcclxuICAgIGlzQXV0aGVudGljYXRlZDogJycsXHJcbn07XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgICBbYWN0aW9uc1R5cGVzLkxPR0lOX1NVQ0NFU1NdOiAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXJFbWFpbDogcGF5bG9hZFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgW2FjdGlvbnNUeXBlcy5MT0dfT1VUXTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIFthY3Rpb25zVHlwZXMuU0VUX0lTX0FVVEhFTlRJQ0FURURdOiAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHBheWxvYWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgaGFuZGxlcnMpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoYWN0aW9uLnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVyc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1SVN0YXRlUmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy91SVN0YXRlUmVkdWNlcic7XHJcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9hdXRoUmVkdWNlcic7XHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvdXNlcnNSZWR1Y2VyJztcclxuaW1wb3J0IGFsZXJ0UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9hbGVydFJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICB1SVN0YXRlUmVkdWNlcixcclxuICBhdXRoUmVkdWNlcixcclxuICB1c2Vyc1JlZHVjZXIsXHJcbiAgYWxlcnRSZWR1Y2VyXHJcbn0pO1xyXG4iLCJpbXBvcnQgYWN0aW9uc1R5cGVzIGZyb20gJy4uL2FjdGlvbnNUeXBlcyc7XHJcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4vY3JlYXRlUmVkdWNlcic7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgaXNFcnJvcldpbmRvd09wZW46IGZhbHNlLFxyXG4gICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgaXNOb3RpZmljYXRpb25PcGVuOiBmYWxzZSxcclxuICAgIG5vdGlmaWNhdGlvbk1lc3NhZ2U6ICcnXHJcbn07XHJcblxyXG5jb25zdCBVSVN0YXRlUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgICBbYWN0aW9uc1R5cGVzLlNFVF9MT0FESU5HXTogKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBwYXlsb2FkXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBbYWN0aW9uc1R5cGVzLlRPR0dMRV9ERUxFVEVfVVNFUl9NT0RBTF06IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogIXN0YXRlLmlzTW9kYWxWaXNpYmxlXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBbYWN0aW9uc1R5cGVzLk9QRU5fTk9USUZJQ0FUSU9OXTogKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNOb3RpZmljYXRpb25PcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25NZXNzYWdlOiBwYXlsb2FkXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBbYWN0aW9uc1R5cGVzLkNMT1NFX05PVElGSUNBVElPTl06IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBpc05vdGlmaWNhdGlvbk9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25NZXNzYWdlOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgW2FjdGlvbnNUeXBlcy5UT0dHTEVfRVJST1JfV0lORE9XX0lTX09QRU5dOiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzRXJyb3JXaW5kb3dPcGVuOiAhc3RhdGUuaXNFcnJvcldpbmRvd09wZW5cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVSVN0YXRlUmVkdWNlcjtcclxuIiwiaW1wb3J0IGFjdGlvbnNUeXBlcyBmcm9tICcuLi9hY3Rpb25zVHlwZXMnO1xyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9jcmVhdGVSZWR1Y2VyJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyczogW10sXHJcbiAgc2VhcmNoVGV4dDogJydcclxufTtcclxuXHJcbmNvbnN0IHVzZXJzUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgW2FjdGlvbnNUeXBlcy5TRVRfVVNFUlNfVE9fU1RPUkVdOiAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHVzZXJzOiBwYXlsb2FkXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgW2FjdGlvbnNUeXBlcy5ERUxFVEVfVVNFUl9TVUNDRVNTXTogKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB1c2Vyczogc3RhdGUudXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlci5vYmplY3RJZCAhPT0gcGF5bG9hZClcclxuICAgIH07XHJcbiAgfSxcclxuICBbYWN0aW9uc1R5cGVzLlVQREFURV9TRUFSQ0hdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgc2VhcmNoVGV4dDogcGF5bG9hZFxyXG4gICAgfTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlcnNSZWR1Y2VyO1xyXG5cclxuIiwiaW1wb3J0IHt0YWtlRXZlcnl9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB0eXBlcyBmcm9tICcuLi9hY3Rpb25zVHlwZXMnO1xyXG5pbXBvcnQge2NyZWF0ZVVzZXJTYWdhLCBkZWxldGVVc2VyU2FnYSwgZmV0Y2hVc2Vyc1NhZ2EsIGxvZ2luU2FnYX0gZnJvbSAnLi9zYWdhcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkodHlwZXMuTE9HSU4sIGxvZ2luU2FnYSk7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KHR5cGVzLkZFVENIX1VTRVJTLCBmZXRjaFVzZXJzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KHR5cGVzLkRFTEVURV9VU0VSLCBkZWxldGVVc2VyU2FnYSk7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KHR5cGVzLkNSRUFURV9VU0VSLCBjcmVhdGVVc2VyU2FnYSk7XHJcbn1cclxuIiwiaW1wb3J0IHtjYWxsLCBwdXR9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7XHJcbiAgICBvcGVuTm90aWZpY2F0aW9uLFxyXG4gICAgc2V0TG9hZGluZyxcclxuICAgIHRvZ2dsZURlbGV0ZVVzZXJNb2RhbCxcclxuICAgIHRvZ2dsZUVycm9yV2luZG93SXNPcGVuXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy91SVN0YXRlQWN0aW9ucyc7XHJcbmltcG9ydCB7Y3JlYXRlVXNlckFwaSwgZGVsZXRlVXNlckFwaSwgZmV0Y2hVc2Vyc0FwaSwgbG9naW5BcGl9IGZyb20gJy4uLy4uL2FwaSc7XHJcbmltcG9ydCB7bG9naW5TdWNjZXNzfSBmcm9tICcuLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHtkZWxldGVVc2VyU3VjY2Vzcywgc2V0VXNlcnNUb1N0b3JlfSBmcm9tICcuLi9hY3Rpb25zL3VzZXJzQWN0aW9ucyc7XHJcbmltcG9ydCB7c2V0QWxlcnR9IGZyb20gJy4uL2FjdGlvbnMvYWxlcnRBY3Rpb25zJztcclxuaW1wb3J0IHtOT1RJRklDQVRJT05TfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGF0bnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBsb2dpblNhZ2EoZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ2luQXBpLCBkYXRhLnBheWxvYWQpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KGxvZ2luU3VjY2VzcyhkYXRhLnBheWxvYWQuZW1haWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeWllbGQgcHV0KHNldExvYWRpbmcoZmFsc2UpKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS1lOicsIGVycm9yKTtcclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyhmYWxzZSkpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIHNldEFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgeWllbGQgcHV0KHRvZ2dsZUVycm9yV2luZG93SXNPcGVuKCkpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFVzZXJzU2FnYSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChmZXRjaFVzZXJzQXBpKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHNldFVzZXJzVG9TdG9yZShyZXNwb25zZS5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyhmYWxzZSkpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNldExvYWRpbmcoZmFsc2UpKTtcclxuICAgICAgICB5aWVsZCBwdXQoXHJcbiAgICAgICAgICAgIHNldEFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgeWllbGQgcHV0KHRvZ2dsZUVycm9yV2luZG93SXNPcGVuKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGRlbGV0ZVVzZXJTYWdhKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHNldExvYWRpbmcodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChkZWxldGVVc2VyQXBpLCBkYXRhKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5kZWxldGlvblRpbWUpIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KGRlbGV0ZVVzZXJTdWNjZXNzKGRhdGEucGF5bG9hZCkpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQodG9nZ2xlRGVsZXRlVXNlck1vZGFsKCkpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQob3Blbk5vdGlmaWNhdGlvbihOT1RJRklDQVRJT05TLmRlbGV0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyhmYWxzZSkpO1xyXG4gICAgICAgIHlpZWxkIHB1dChcclxuICAgICAgICAgICAgc2V0QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB5aWVsZCBwdXQodG9nZ2xlRXJyb3JXaW5kb3dJc09wZW4oKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY3JlYXRlVXNlclNhZ2EoZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBwdXQoc2V0TG9hZGluZyh0cnVlKSk7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGRhdGEucGF5bG9hZDtcclxuICAgICAgICBuZXdVc2VyLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAwMCAtIDEgKyAxKSkgKyAxO1xyXG4gICAgICAgIG5ld1VzZXIuQmlydGhEYXRlID0gbmV3IERhdGUobmV3VXNlci5iaXJ0aERhdGUpLmdldFRpbWUoKTtcclxuICAgICAgICBkZWxldGUgbmV3VXNlci5iaXJ0aERhdGU7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNyZWF0ZVVzZXJBcGksIGRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChvcGVuTm90aWZpY2F0aW9uKE5PVElGSUNBVElPTlMuYWRkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHlpZWxkIHB1dChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChzZXRMb2FkaW5nKGZhbHNlKSk7XHJcbiAgICAgICAgeWllbGQgcHV0KFxyXG4gICAgICAgICAgICBzZXRBbGVydCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh0b2dnbGVFcnJvcldpbmRvd0lzT3BlbigpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgZ3JlZW46ICcjMDBGRkFGJyxcclxuICAgIHJlZDogJyNGRjEzMDAnLFxyXG4gICAgd2hpdGU6ICcjZmZmJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTlMgPSB7XHJcbiAgICBkZWxldGU6ICdVc2VyIGhhcyBiZWVuIHJlbW92ZWQhJyxcclxuICAgIGFkZDogJ1VzZXIgaGFzIGJlZW4gYWRkZWQhJ1xyXG59O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9