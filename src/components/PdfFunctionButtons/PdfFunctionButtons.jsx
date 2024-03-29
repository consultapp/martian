import { SIDE } from "@/constants/fixtures";

export const PdfFunctionButtons = ({
  links,
  isLoading,
  isFailed,
  handleMakePdf,
}) => {
  if (isLoading) {
    return (
      <div className="spinner-border text-primary m-2" role="status">
        &nbsp;
      </div>
    );
  }

  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleMakePdf}>
        {!isFailed && links?.at(0) ? "Update" : "Make"} PDF
      </button>

      {!isFailed &&
        links.map(
          (item, i) =>
            item && (
              <a
                href={"/pdf/" + item}
                className="btn btn-primary m-2"
                download={`vizitka_${SIDE[i]}.pdf`}
                key={item}
              >
                Скачать {SIDE[i]}
              </a>
            )
        )}
    </>
  );
};
