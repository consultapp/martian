import Form from "@/components/Form.jsx/Form";
import { pdfSlice } from "@/store/entities/pdf";
import { vcardSlice } from "@/store/entities/vcard";
import { useDispatch } from "react-redux";

export default function FormContainer() {
  const dispatch = useDispatch();

  const handleRefresh = (event) => {
    event.preventDefault();
    dispatch(vcardSlice.actions.clearVcards());
    // dispatch(pdfSlice.actions.clearPdf());
  };

  return <Form handleRefresh={handleRefresh} />;
}
