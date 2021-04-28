var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);
try {
  var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
  _parcelHelpers.defineInteropFlag(exports);
  var _react = require('react');
  var _reactDefault = _parcelHelpers.interopDefault(_react);
  var _axios = require('axios');
  var _axiosDefault = _parcelHelpers.interopDefault(_axios);
  require('../css/App.css');
  var _jsxFileName = "C:\\Users\\HP\\Desktop\\Assignments\\AF Project\\client\\components\\App.js", _s = $RefreshSig$();
  function App() {
    _s();
    /*The attributes to add a new user*/
    const [userID, setuserID] = _react.useState(0);
    const [userType, setuserType] = _react.useState("");
    const [userName, setuserName] = _react.useState("");
    const [userContact, setuserContact] = _react.useState("");
    const [userEmail, setuserEmail] = _react.useState("");
    const [userPassword, setuserPassword] = _react.useState("");
    // Add Method - USER
    const addToList = () => {
      console.log(userID + userName);
      _axiosDefault.default.post("http://localhost:3001/insert", {
        userID: userID,
        userType: userType,
        userName: userName,
        userContact: userContact,
        userEmail: userEmail,
        userPassword: userPassword
      });
      window.location.reload(false);
    };
    return (
      /*#__PURE__*/_reactDefault.default.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("div", {
        class: "AddForm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, "User Information - CMT"), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, "User ID"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserID(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      }, "User Type"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserType(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, "User Full Name"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserName(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "User Contact Number"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserContact(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, "User Email Address"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserEmail(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, "User Password"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setuserPassword(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("button", {
        onClick: addToList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, "Add User Details")))
    );
  }
  _s(App, "5DQ6tvED6oq5V7uEBZUo2/VMyFo=");
  _c = App;
  exports.default = App;
  var _c;
  $RefreshReg$(_c, "App");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}