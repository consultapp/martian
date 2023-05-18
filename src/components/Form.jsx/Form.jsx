import FieldsContainer from "@/containers/Fields/Fields";
import { PdfFunctionButtonsContainer } from "@/containers/PdfFunctionButtons/PdfFunctionButtons";

export default function Form({ handleRefresh }) {
  return (
    <form>
      <FieldsContainer />
      <div className="row">
        <div className="edit-form-buttons">
          <button
            className="btn btn-secondary outline m-2"
            onClick={handleRefresh}
          >
            &lt; Выбрать шаблоны
          </button>

          <PdfFunctionButtonsContainer />
        </div>
      </div>
    </form>
  );
}
