"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _layout = _interopRequireDefault(require("./layout"));

/* PACKAGES
..............................*/
var _default = function _default(config) {
  var app = (0, _express.default)();
  /* EXPRESS MIDDLEWARE
  ..............................*/

  app.use(_bodyParser.default.json());
  app.use(_express.default.static("".concat(__dirname, "/../dist")));
  app.use(_express.default.static("".concat(config.distDir)));
  app.use(_express.default.static("".concat(config.staticFiles)));
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  /* ROUTES
  ..............................*/

  app.get('*', function (request, response) {
    response.send((0, _layout.default)({
      baseUrl: "".concat(config.host, ":").concat(config.port),
      head: config.head,
      styles: config.styles,
      logo: config.logo,
      favicon: config.favicon,
      customCSS: config.customCSS
    }));
  });
  /* LISTEN
  ..............................*/

  app.listen(config.port, function () {
    console.log("Web server listening on port ".concat(config.port));
  });
};

exports.default = _default;