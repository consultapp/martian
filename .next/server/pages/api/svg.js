(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 801:
/***/ (() => {

// import fs from 'fs'
// import { create } from 'html-pdf'
// const options = {
//   // format: '[266.46, 153.07]',
//   // height: '55cm', // allowed units: mm, cm, in, px
//   // width: '85mm',
//   width: '266.46px', // allowed units: mm, cm, in, px
//   height: '153.07px',
//   border: '0',
//   timeout: 10000,
//   type: 'pdf',
//   orientation: 'landscape',
// }
// const createOrderPdf = (svg) => {
//   try {
//     create(
//       `<html><body style='background:#ccc, padding:0; margin:0' ><img src="${svg}"  alt="vizitka svg" ></body></html>`,
//       options
//     ).toFile('./1.pdf', function (err, res) {
//       if (err) return console.log(`>>>Error of pdf .toFile: ${err}`)
//     })
//   } catch (err) {
//     console.log(`createOrderPdf: try ${err}`)
//   }
// }
// fs.readFile('/1.svg', { encoding: 'utf-8' }, function (err, data) {
//   if (!err) {
//     const svg = data
//     createOrderPdf(
//       'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
//     )
//     // fs.writeFile('./2.svg', svg, () => {})
//   } else {
//     console.log(err)
//   }
// })
// // const svg = await readFile('./1.svg')
// // console.log(svg)
// // loadSvg(svg)


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(801));
module.exports = __webpack_exports__;

})();