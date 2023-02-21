// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create } from 'html-pdf'
export default function handler(req, res) {
  createOrderPdf(req.body, res)
}
const options = {
  width: '266.46px', // allowed units: mm, cm, in, px
  height: '153.07px',
  border: '0',
  timeout: 10000,
  type: 'pdf',
  orientation: 'landscape',
}

function createOrderPdf(svg, result) {
  try {
    create(
      `<html>
        <body style="background:#ccc, padding:0; margin:0">
          <img src="${dataSvg(svg)}" alt="vizitka svg" />
        </body>
      </html>`,
      options
    ).toFile('./static/1.pdf', function (err, res) {
      if (err) return console.log(`>>>Error of pdf .toFile: ${err}`)
      result.status(200).json({ pdf: '/static/1.pdf' })
    })
  } catch (err) {
    console.log(`createOrderPdf: try ${err}`)
  }
}
function dataSvg(svg) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
}
