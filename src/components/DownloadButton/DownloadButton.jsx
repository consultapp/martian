/*
DownloadButton
*/

export const DownloadButton = ({ resultName, side }) => (
  <a
    href={"/static/pdf/" + resultName}
    className="btn btn-primary m-2"
    download={`vizitka_${side}.pdf`}
    key={resultName}
  >
    Скачать {side}
  </a>
);
