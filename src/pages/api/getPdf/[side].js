// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create } from "html-pdf";

const PDF_API_PATH = "./public/static/pdf/";

export default function handler(req, res) {
  const { side = "front" } = req.query;
  createOrderPdf(req.body, res, side);
}

const options = {
  width: "266.46px", // allowed units: mm, cm, in, px
  height: "153.07px",
  border: "0",
  timeout: 10000,
  type: "pdf",
  orientation: "landscape",
};

function createOrderPdf(svg, result, side) {
  const id = new Date().getTime();
  const resultName = `${id}_${side}.pdf`;
  try {
    create(
      `<html>
        <body style="background:#ccc, padding:0; margin:0">
          <img src="${dataSvg(svg)}" alt="vizitka svg" />
        </body>
      </html>`,
      options
    ).toFile(PDF_API_PATH + resultName, function (err, res) {
      if (err) return console.log(`>>>Error of pdf .toFile: ${err}`);
      result.status(200).json({ resultName: resultName });
    });
  } catch (err) {
    console.log(`createOrderPdf: try ${err}`);
  }
}
function dataSvg(svg) {
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
