webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/page-layout/PageLayout.js":
/*!**************************************************!*\
  !*** ./src/components/page-layout/PageLayout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout.module.scss */ "./src/components/page-layout/PageLayout.module.scss");
/* harmony import */ var _PageLayout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logo/Logo */ "./src/components/logo/Logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Roman\\code\\user-cloud-next\\src\\components\\page-layout\\PageLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Header,
  Content,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const PageLayout = ({
  children,
  handleLogout
}) => {
  _s();

  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const handleOnclick = () => {
    handleLogout();
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    className: _PageLayout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['page-layout-wrapper'],
    style: {
      minHeight: '100vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Header, {
    className: "site-layout-background",
    style: {
      padding: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_logo_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    className: "site-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(Sider, {
    width: 150,
    collapsible: true,
    collapsed: collapsed,
    onCollapse: onCollapse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "dark",
    defaultSelectedKeys: ['1'],
    mode: "inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "7",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Users"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "8",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserAddOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/add-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "Add User"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "9",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LogoutOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 50
      }
    }),
    onClick: handleOnclick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Logout"))), __jsx(Content, {
    style: {
      margin: '0 16px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "site-layout-background",
    style: {
      padding: 24,
      minHeight: 360
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, children))));
};

_s(PageLayout, "IaHwFfvbaw8y79e5do0CzWS1eXc=");

_c = PageLayout;
/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

var _c;

$RefreshReg$(_c, "PageLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZS1sYXlvdXQvUGFnZUxheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJDb250ZW50IiwiU2lkZXIiLCJMYXlvdXQiLCJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJoYW5kbGVMb2dvdXQiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsIm9uQ29sbGFwc2UiLCJoYW5kbGVPbmNsaWNrIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUNBLFFBQUQ7QUFBU0MsU0FBVDtBQUFrQkM7QUFBbEIsSUFBMkJDLDJDQUFqQzs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFDQyxVQUFEO0FBQVdDO0FBQVgsQ0FBRCxLQUE4QjtBQUFBOztBQUM3QyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNQyxVQUFVLEdBQUdILFNBQVMsSUFBSTtBQUM1QkMsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFJQSxRQUFNSSxhQUFhLEdBQUcsTUFBTTtBQUN4QkwsZ0JBQVk7QUFDZixHQUZEOztBQUlBLFNBQ0ksTUFBQywyQ0FBRDtBQUFRLGFBQVMsRUFBRU0sOERBQUssQ0FBQyxxQkFBRCxDQUF4QjtBQUFpRCxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBMkMsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQywyQ0FBRDtBQUFRLGFBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFLEdBQWQ7QUFBbUIsZUFBVyxNQUE5QjtBQUErQixhQUFTLEVBQUVQLFNBQTFDO0FBQXFELGNBQVUsRUFBRUcsVUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUMsTUFBWjtBQUFtQix1QkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FBeEM7QUFBK0MsUUFBSSxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLFFBQUksRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBREosQ0FESixFQU1JLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBREosQ0FOSixFQVlJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsUUFBSSxFQUFFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF6QjtBQUE0QyxXQUFPLEVBQUVDLGFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixDQURKLENBREosRUFtQkksTUFBQyxPQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUNJLFlBQU0sRUFBRTtBQUFULEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUF3QyxTQUFLLEVBQUU7QUFBQ0QsYUFBTyxFQUFFLEVBQVY7QUFBY0QsZUFBUyxFQUFFO0FBQXpCLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1IsUUFETCxDQURKLENBbkJKLENBSkosQ0FESjtBQWlDSCxDQTVDRDs7R0FBTUQsVTs7S0FBQUEsVTtBQThDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDljODYzZTYxMTJiNDNlYTk1NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL1BhZ2VMYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0xheW91dCwgTWVudX0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7VXNlckFkZE91dGxpbmVkLCBVc2VyT3V0bGluZWQsIExvZ291dE91dGxpbmVkLH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9sb2dvL0xvZ28nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCB7SGVhZGVyLCBDb250ZW50LCBTaWRlcn0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBQYWdlTGF5b3V0ID0gKHtjaGlsZHJlbiwgaGFuZGxlTG9nb3V0fSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNvbGxhcHNlID0gY29sbGFwc2VkID0+IHtcclxuICAgICAgICBzZXRDb2xsYXBzZWQoY29sbGFwc2VkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVMb2dvdXQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT17c3R5bGVbJ3BhZ2UtbGF5b3V0LXdyYXBwZXInXX0gc3R5bGU9e3ttaW5IZWlnaHQ6ICcxMDB2aCd9fT5cclxuICAgICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCIgc3R5bGU9e3twYWRkaW5nOiAwfX0+XHJcbiAgICAgICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZXIgd2lkdGg9ezE1MH0gY29sbGFwc2libGUgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2U9e29uQ29sbGFwc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfSBtb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiIGljb249ezxVc2VyT3V0bGluZWQgLz59ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlVzZXJzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI4XCIgaWNvbj17PFVzZXJBZGRPdXRsaW5lZCAvPn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FkZC11c2VyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BZGQgVXNlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjlcIiBpY29uPXs8TG9nb3V0T3V0bGluZWQvPn0gb25DbGljaz17aGFuZGxlT25jbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPC9TaWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7bWFyZ2luOiAnMCAxNnB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtYmFja2dyb3VuZFwiIHN0eWxlPXt7cGFkZGluZzogMjQsIG1pbkhlaWdodDogMzYwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9