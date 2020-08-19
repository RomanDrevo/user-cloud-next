webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _store_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/saga */ "./src/store/saga/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/App.scss */ "./src/css/App.scss");
/* harmony import */ var _css_App_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_App_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\Roman\\code\\user-cloud-next\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      middlewares = [sagaMiddleware],
      store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_store_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_9__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(...middlewares)));
sagaMiddleware.run(_store_saga__WEBPACK_IMPORTED_MODULE_8__["watchSaga"]);

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
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
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_App_scss__WEBPACK_IMPORTED_MODULE_10___default.a['app-wrapper'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }))));
  }

} //makeStore function that returns a new store for every request


const makeStore = () => store;

console.log('----store: ', store); //withRedux wrapper that passes the store to the App Component

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(makeStore)(MyApp));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsIndhdGNoU2FnYSIsIk15QXBwIiwiQXBwIiwiZ2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwicmVuZGVyIiwicHJvcHMiLCJzdHlsZSIsIm1ha2VTdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUNJQSxjQUFjLEdBQUdDLDBEQUFvQixFQUR6QztBQUFBLE1BRUlDLFdBQVcsR0FBRyxDQUFDRixjQUFELENBRmxCO0FBQUEsTUFHSUcsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyx1REFBRCxFQUFXQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHTCxXQUFKLENBQWhCLENBQTlCLENBSHZCO0FBTUFGLGNBQWMsQ0FBQ1EsR0FBZixDQUFtQkMscURBQW5COztBQUdBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUF3QjtBQUNwQixlQUFhQyxlQUFiLENBQTZCO0FBQUNDLGFBQUQ7QUFBWUM7QUFBWixHQUE3QixFQUErQztBQUMzQyxVQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0QsZUFBVixHQUE0QixNQUFNQyxTQUFTLENBQUNELGVBQVYsQ0FBMEJFLEdBQTFCLENBQWxDLEdBQW1FLEVBQXJGLENBRDJDLENBRzNDOztBQUNBLFdBQU87QUFBQ0MsZUFBUyxFQUFFQTtBQUFaLEtBQVA7QUFDSDs7QUFFREMsUUFBTSxHQUFHO0FBRUw7QUFDQSxVQUFNO0FBQUNILGVBQUQ7QUFBWUU7QUFBWixRQUF5QixLQUFLRSxLQUFwQztBQUdBLFdBQ0ksTUFBQyxvREFBRDtBQUFVLFdBQUssRUFBRWQsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFFZSxxREFBSyxDQUFDLGFBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsU0FBRCx5RkFBZUgsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREosQ0FESixDQURKO0FBUUg7O0FBdEJtQixDLENBMEJ4Qjs7O0FBQ0EsTUFBTUksU0FBUyxHQUFHLE1BQU1oQixLQUF4Qjs7QUFFQWlCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJsQixLQUEzQixFLENBRUE7O0FBQ2VtQixpSUFBUyxDQUFDSCxTQUFELENBQVQsQ0FBcUJULEtBQXJCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45YjE2ZDNiYzZhMmQ4OGVmZjRlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7d2F0Y2hTYWdhfSBmcm9tIFwiLi4vc3RvcmUvc2FnYVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9BcHAuc2Nzcyc7XHJcblxyXG5jb25zdFxyXG4gICAgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpLFxyXG4gICAgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdLFxyXG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSk7XHJcblxyXG5cclxuc2FnYU1pZGRsZXdhcmUucnVuKHdhdGNoU2FnYSk7XHJcblxyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LCBjdHh9KSB7XHJcbiAgICAgICAgY29uc3QgcGFnZVByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG5cclxuICAgICAgICAvL0FueXRoaW5nIHJldHVybmVkIGhlcmUgY2FuIGJlIGFjY2VzcyBieSB0aGUgY2xpZW50XHJcbiAgICAgICAgcmV0dXJuIHtwYWdlUHJvcHM6IHBhZ2VQcm9wc307XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICAvL0luZm9ybWF0aW9uIHRoYXQgd2FzIHJldHVybmVkICBmcm9tICdnZXRJbml0aWFsUHJvcHMnIGFyZSBzdG9yZWQgaW4gdGhlIHByb3BzIGkuZS4gcGFnZVByb3BzXHJcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnYXBwLXdyYXBwZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vbWFrZVN0b3JlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgcmVxdWVzdFxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuXHJcbmNvbnNvbGUubG9nKCctLS0tc3RvcmU6ICcsIHN0b3JlKTtcclxuXHJcbi8vd2l0aFJlZHV4IHdyYXBwZXIgdGhhdCBwYXNzZXMgdGhlIHN0b3JlIHRvIHRoZSBBcHAgQ29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==