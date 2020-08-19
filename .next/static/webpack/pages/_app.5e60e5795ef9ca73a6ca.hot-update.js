webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: loginApi, fetchUsersApi, deleteUserApi, createUserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginApi", function() { return loginApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersApi", function() { return fetchUsersApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserApi", function() { return deleteUserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserApi", function() { return createUserApi; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const baseUrl = process.env.REACT_APP_API_URL || '';
const loginUrl = process.env.REACT_APP_LOGIN_URL || '';

const {
  apiURLs
} = __webpack_require__(/*! ../config */ "./src/config.js"); // const env = process.env.ENVIRONMENT || 'local';


console.log(apiURLs);
const {
  BASE_URL: apiUrl
} = apiURLs;
console.log('-----apiUrl: ', apiUrl);
axios__WEBPACK_IMPORTED_MODULE_1___default.a.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.baseURL = baseUrl;
  return config;
});
const loginApi = () => {
  // const {username, password} = data;
  const data = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${loginUrl}/api/login`, data);
};
const fetchUsersApi = () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/cyberhat_users');
};
const deleteUserApi = data => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/cyberhat_users', {
    data: {
      objectId: data.payload
    }
  });
};
const createUserApi = data => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/cyberhat_users', _objectSpread({}, data.payload));
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfVVJMIiwibG9naW5VcmwiLCJSRUFDVF9BUFBfTE9HSU5fVVJMIiwiYXBpVVJMcyIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwiQkFTRV9VUkwiLCJhcGlVcmwiLCJheGlvcyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJhc2VVUkwiLCJsb2dpbkFwaSIsImRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsImZldGNoVXNlcnNBcGkiLCJnZXQiLCJkZWxldGVVc2VyQXBpIiwiZGVsZXRlIiwib2JqZWN0SWQiLCJwYXlsb2FkIiwiY3JlYXRlVXNlckFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxpQkFBWixJQUFpQyxFQUFqRDtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG1CQUFaLElBQW1DLEVBQXBEOztBQUdBLE1BQU07QUFBQ0M7QUFBRCxJQUFZQyxtQkFBTyxDQUFDLGtDQUFELENBQXpCLEMsQ0FDQTs7O0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0EsTUFBTTtBQUFFSSxVQUFRLEVBQUVDO0FBQVosSUFBdUJMLE9BQTdCO0FBRUFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJFLE1BQTdCO0FBRUFDLDRDQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUErQixVQUFVQyxNQUFWLEVBQWtCO0FBQzdDLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQUgsUUFBTSxDQUFDSSxPQUFQLENBQWVDLGFBQWYsR0FBaUMsVUFBU0osS0FBTSxFQUFoRDtBQUNBRCxRQUFNLENBQUNNLE9BQVAsR0FBaUJ0QixPQUFqQjtBQUNBLFNBQU9nQixNQUFQO0FBQ0gsQ0FMRDtBQU9PLE1BQU1PLFFBQVEsR0FBRyxNQUFNO0FBQzFCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHO0FBQ1RDLFNBQUssRUFBRSxvQkFERTtBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQUFiO0FBSUEsU0FBT2QsNENBQUssQ0FBQ2UsSUFBTixDQUFZLEdBQUV2QixRQUFTLFlBQXZCLEVBQW9Db0IsSUFBcEMsQ0FBUDtBQUNILENBUE07QUFTQSxNQUFNSSxhQUFhLEdBQUcsTUFBTTtBQUMvQixTQUFPaEIsNENBQUssQ0FBQ2lCLEdBQU4sQ0FBVSxpQkFBVixDQUFQO0FBQ0gsQ0FGTTtBQUlBLE1BQU1DLGFBQWEsR0FBR04sSUFBSSxJQUFJO0FBQ2pDLFNBQU9aLDRDQUFLLENBQUNtQixNQUFOLENBQWEsaUJBQWIsRUFBZ0M7QUFBQ1AsUUFBSSxFQUFFO0FBQUNRLGNBQVEsRUFBRVIsSUFBSSxDQUFDUztBQUFoQjtBQUFQLEdBQWhDLENBQVA7QUFDSCxDQUZNO0FBSUEsTUFBTUMsYUFBYSxHQUFHVixJQUFJLElBQUk7QUFDakMsU0FBT1osNENBQUssQ0FBQ2UsSUFBTixDQUFXLGlCQUFYLG9CQUFrQ0gsSUFBSSxDQUFDUyxPQUF2QyxFQUFQO0FBQ0gsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVlNjBlNTc5NWVmOWNhNzNhNmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfVVJMIHx8ICcnO1xyXG5jb25zdCBsb2dpblVybCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9MT0dJTl9VUkwgfHwgJyc7XHJcblxyXG5cclxuY29uc3Qge2FwaVVSTHN9ID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbi8vIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52LkVOVklST05NRU5UIHx8ICdsb2NhbCc7XHJcblxyXG5jb25zb2xlLmxvZyhhcGlVUkxzKTtcclxuY29uc3QgeyBCQVNFX1VSTDogYXBpVXJsIH0gPSBhcGlVUkxzO1xyXG5cclxuY29uc29sZS5sb2coJy0tLS0tYXBpVXJsOiAnLCBhcGlVcmwpO1xyXG5cclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gIGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgY29uZmlnLmJhc2VVUkwgPSBiYXNlVXJsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BcGkgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB7dXNlcm5hbWUsIHBhc3N3b3JkfSA9IGRhdGE7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiAnZXZlLmhvbHRAcmVxcmVzLmluJyxcclxuICAgICAgICBwYXNzd29yZDogJ2NpdHlzbGlja2EnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7bG9naW5Vcmx9L2FwaS9sb2dpbmAsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNBcGkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvY3liZXJoYXRfdXNlcnMnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyQXBpID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvY3liZXJoYXRfdXNlcnMnLCB7ZGF0YToge29iamVjdElkOiBkYXRhLnBheWxvYWR9fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlckFwaSA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9jeWJlcmhhdF91c2VycycsIHsuLi5kYXRhLnBheWxvYWR9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==