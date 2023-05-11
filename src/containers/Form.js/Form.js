import Form from "@/components/Form.jsx/Form";
import { fetchPdf } from "@/store/entities/pdf/thunk/fetchPdf";
import { vcardSlice } from "@/store/entities/vcard";
import { useDispatch } from "react-redux";

export default function FormContainer() {
  const dispatch = useDispatch();

  const handleRefresh = (event) => {
    event.preventDefault();
    dispatch(vcardSlice.actions.clearVcards());
    dispatch(fetchPdf(true));
  };

  return <Form handleRefresh={handleRefresh} />;
}
