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
  var _App = require('./App2');
  var _AppDefault = _parcelHelpers.interopDefault(_App);
  var _reactRouterDom = require('react-router-dom');
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
    /*The attributes to add a workshop*/
    const [workshopTitle, setworkshopTitle] = _react.useState("");
    const [workshopDescription, setworkshopDescription] = _react.useState("");
    const [workshopSpeakers, setworkshopSpeakers] = _react.useState("");
    const [workshopDate, setworkshopDate] = _react.useState("");
    const [workshopTime, setworkshopTime] = _react.useState("");
    const approvalStatus = 'PendingApproval';
    // Add Method - USER
    const addToList = () => {
      console.log(userID + userName);
      _axiosDefault.default.post("http://localhost:3001/insert", {
        userID: userID,
        userType: userType,
        userName: userName,
        userContact: userContact,
        userEmail: userEmail,
        userPassword: userPassword,
        workshopTitle: workshopTitle,
        workshopDescription: workshopDescription,
        workshopSpeakers: workshopSpeakers,
        workshopDate: workshopDate,
        workshopTime: workshopTime,
        approvalStatus: approvalStatus
      });
      window.location.reload(false);
      console.log("Data inserted successfully!!!");
    };
    return (
      /*#__PURE__*/_reactDefault.default.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("div", {
        className: "AddForm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }, "User Information - CMT"), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
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
          lineNumber: 52,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 57,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
          lineNumber: 62,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
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
          lineNumber: 67,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
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
          lineNumber: 72,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("button", {
        onClick: addToList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "Add User Details")), /*#__PURE__*/_reactDefault.default.createElement("div", {
        class: "AddForm2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, /*#__PURE__*/_reactDefault.default.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, "Workshop Information - CMT"), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, "Workshop Title"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setworkshopTitle(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }
      }, "Workshop Description"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setworkshopDescription(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, "Workshop Speakers"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setworkshopSpeakers(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, "Workshop Date"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setworkshopDate(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }
      }), /*#__PURE__*/_reactDefault.default.createElement("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, "Workshop Time"), /*#__PURE__*/_reactDefault.default.createElement("input", {
        type: "text",
        onChange: event => {
          setworkshopTime(event.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      })), /*#__PURE__*/_reactDefault.default.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.BrowserRouter, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }
      }, /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Link, {
        to: "/workshop/add",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, "Add"), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Switch, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
        exact: true,
        path: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }
      }), /*#__PURE__*/_reactDefault.default.createElement(_reactRouterDom.Route, {
        path: "/workshop/add",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }
      }, /*#__PURE__*/_reactDefault.default.createElement(_AppDefault.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }
      }))))))
    );
  }
  _s(App, "hXCItCjpw12qzv7XYliS2c0fqhA=");
  _c = App;
  exports.default = App;
  var _c;
  $RefreshReg$(_c, "App");
  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}