import { SIDE } from "@/constants/fixtures";
import { DownloadButton } from "../DownloadButton/DownloadButton";
import Fields from "../Fields/Fields";

export default function Form({
  fields,
  setFields,
  handleMakePdf,
  download,
  isLoading,
  handleRefresh,
}) {
  function updateFields({ target }) {
    const tmpFields = { ...fields };
    tmpFields[target.name] = target.value;
    setFields(tmpFields);
  }

  return (
    <form>
      <Fields fields={fields} updateFields={updateFields} />
      <div className="row">
        <div className="edit-form-buttons">
          <button
            className="btn btn-secondary outline m-2"
            onClick={(event) => {
              event.preventDefault();
              handleRefresh();
            }}
          >
            &lt; Выбрать шаблоны
          </button>
          <button className="btn btn-primary m-2" onClick={handleMakePdf}>
            Make PDF
          </button>

          {download.map(
            (item, i) =>
              item && <DownloadButton resultName={item} side={SIDE[i]} />
          )}
          {isLoading && (
            <div className="spinner-border text-primary m-2" role="status">
              &nbsp;
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
