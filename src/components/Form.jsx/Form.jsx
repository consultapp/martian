import FieldsContainer from "@/containers/Fields/Fields";

export default function Form() {
  return (
    <form>
      <FieldsContainer />
      <div className="row">
        <div className="edit-form-buttons">
          <button
            className="btn btn-secondary outline m-2"
            onClick={(event) => {
              event.preventDefault();
              // handleRefresh();
            }}
          >
            &lt; Выбрать шаблоны
          </button>
          <button className="btn btn-primary m-2" onClick>
            Make PDF
          </button>

          {/* {download.map(
            (item, i) =>
              item && <DownloadButton resultName={item} side={SIDE[i]} />
          )} */}
          {/* {isLoading && (
            <div className="spinner-border text-primary m-2" role="status">
              &nbsp;
            </div>
          )} */}
        </div>
      </div>
    </form>
  );
}
