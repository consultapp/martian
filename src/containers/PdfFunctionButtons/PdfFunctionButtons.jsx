import { PdfFunctionButtons } from "@/components/PdfFunctionButtons/PdfFunctionButtons";
import {
  selectIsPdfFailed,
  selectIsPdfLoading,
  selectPdfLinks,
} from "@/store/entities/pdf/selectors";
import { fetchPdf } from "@/store/entities/pdf/thunk/fetchPdf";
import { useDispatch, useSelector } from "react-redux";

export const PdfFunctionButtonsContainer = () => {
  const isLoading = useSelector(selectIsPdfLoading);
  const isFailed = useSelector(selectIsPdfFailed);

  const links = useSelector(selectPdfLinks);
  const dispatch = useDispatch();

  function handleMakePdf(event) {
    event.preventDefault();
    dispatch(fetchPdf());
  }
  return (
    <PdfFunctionButtons
      handleMakePdf={handleMakePdf}
      isLoading={isLoading}
      isFailed={isFailed}
      links={links}
    />
  );
};
