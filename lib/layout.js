"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(config) {
  return "\n  <!doctype html>\n  <html>\n    <head>\n      <title>Style Guide</title>\n      ".concat(config.head, "\n      ").concat(config.favicon ? "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"".concat(config.favicon, "\" />") : "", "\n      <link href=\"").concat(config.baseUrl, "/guide-styles.bundle.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\">\n      <link href=\"").concat(config.baseUrl, "/styles.min.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\">\n      ").concat(config.customCSS ? "<link href=\"".concat(config.baseUrl, "/styles.custom.min.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\">") : "", "\n\n      <link href=\"").concat(config.baseUrl, "/icons.min.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\">\n    </head>\n    <body>\n      <div id=\"style-guide\">\n      </div>\n    </body>\n    <script>window.config = ").concat(JSON.stringify({
    baseUrl: config.baseUrl,
    logo: config.logo
  }), "</script>\n    <script>window.styles = ").concat(JSON.stringify(config.styles), "</script>\n    <script src=\"").concat(config.baseUrl, "/guide-scripts.bundle.js\"></script>\n  </html>\n");
};

exports.default = _default;