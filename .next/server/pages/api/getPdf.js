"use strict";
(() => {
var exports = {};
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "html-pdf"
const external_html_pdf_namespaceObject = require("html-pdf");
;// CONCATENATED MODULE: ./src/pages/api/getPdf.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    createOrderPdf(req.body, res);
}
const options = {
    width: "266.46px",
    height: "153.07px",
    border: "0",
    timeout: 10000,
    type: "pdf",
    orientation: "landscape"
};
function createOrderPdf(svg, result) {
    try {
        (0,external_html_pdf_namespaceObject.create)(`<html>
        <body style="background:#ccc, padding:0; margin:0">
          <img src="${dataSvg(svg)}" alt="vizitka svg" />
        </body>
      </html>`, options).toFile("./static/1.pdf", function(err, res) {
            if (err) return console.log(`>>>Error of pdf .toFile: ${err}`);
            result.status(200).json({
                pdf: "/static/1.pdf"
            });
        });
    } catch (err) {
        console.log(`createOrderPdf: try ${err}`);
    }
}
function dataSvg(svg) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(318));
module.exports = __webpack_exports__;

})();