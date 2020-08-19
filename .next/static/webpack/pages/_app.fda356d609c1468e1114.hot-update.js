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
console.log('-----baseUrl: ', baseUrl);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfVVJMIiwibG9naW5VcmwiLCJSRUFDVF9BUFBfTE9HSU5fVVJMIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYmFzZVVSTCIsImxvZ2luQXBpIiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwiZmV0Y2hVc2Vyc0FwaSIsImdldCIsImRlbGV0ZVVzZXJBcGkiLCJkZWxldGUiLCJvYmplY3RJZCIsInBheWxvYWQiLCJjcmVhdGVVc2VyQXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUFaLElBQWlDLEVBQWpEO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsbUJBQVosSUFBbUMsRUFBcEQ7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJQLE9BQTlCO0FBRUFRLDRDQUFLLENBQUNDLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUErQixVQUFVQyxNQUFWLEVBQWtCO0FBQzdDLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQUgsUUFBTSxDQUFDSSxPQUFQLENBQWVDLGFBQWYsR0FBaUMsVUFBU0osS0FBTSxFQUFoRDtBQUNBRCxRQUFNLENBQUNNLE9BQVAsR0FBaUJsQixPQUFqQjtBQUNBLFNBQU9ZLE1BQVA7QUFDSCxDQUxEO0FBT08sTUFBTU8sUUFBUSxHQUFHLE1BQU07QUFDMUI7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDVEMsU0FBSyxFQUFFLG9CQURFO0FBRVRDLFlBQVEsRUFBRTtBQUZELEdBQWI7QUFJQSxTQUFPZCw0Q0FBSyxDQUFDZSxJQUFOLENBQVksR0FBRW5CLFFBQVMsWUFBdkIsRUFBb0NnQixJQUFwQyxDQUFQO0FBQ0gsQ0FQTTtBQVNBLE1BQU1JLGFBQWEsR0FBRyxNQUFNO0FBQy9CLFNBQU9oQiw0Q0FBSyxDQUFDaUIsR0FBTixDQUFVLGlCQUFWLENBQVA7QUFDSCxDQUZNO0FBSUEsTUFBTUMsYUFBYSxHQUFHTixJQUFJLElBQUk7QUFDakMsU0FBT1osNENBQUssQ0FBQ21CLE1BQU4sQ0FBYSxpQkFBYixFQUFnQztBQUFDUCxRQUFJLEVBQUU7QUFBQ1EsY0FBUSxFQUFFUixJQUFJLENBQUNTO0FBQWhCO0FBQVAsR0FBaEMsQ0FBUDtBQUNILENBRk07QUFJQSxNQUFNQyxhQUFhLEdBQUdWLElBQUksSUFBSTtBQUNqQyxTQUFPWiw0Q0FBSyxDQUFDZSxJQUFOLENBQVcsaUJBQVgsb0JBQWtDSCxJQUFJLENBQUNTLE9BQXZDLEVBQVA7QUFDSCxDQUZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmRhMzU2ZDYwOWMxNDY4ZTExMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9VUkwgfHwgJyc7XHJcbmNvbnN0IGxvZ2luVXJsID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0xPR0lOX1VSTCB8fCAnJztcclxuXHJcbmNvbnNvbGUubG9nKCctLS0tLWJhc2VVcmw6ICcsIGJhc2VVcmwpO1xyXG5cclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gIGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgY29uZmlnLmJhc2VVUkwgPSBiYXNlVXJsO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BcGkgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB7dXNlcm5hbWUsIHBhc3N3b3JkfSA9IGRhdGE7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGVtYWlsOiAnZXZlLmhvbHRAcmVxcmVzLmluJyxcclxuICAgICAgICBwYXNzd29yZDogJ2NpdHlzbGlja2EnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7bG9naW5Vcmx9L2FwaS9sb2dpbmAsIGRhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNBcGkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvY3liZXJoYXRfdXNlcnMnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyQXBpID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvY3liZXJoYXRfdXNlcnMnLCB7ZGF0YToge29iamVjdElkOiBkYXRhLnBheWxvYWR9fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlckFwaSA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9jeWJlcmhhdF91c2VycycsIHsuLi5kYXRhLnBheWxvYWR9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==