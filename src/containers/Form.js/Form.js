import Form from "@/components/Form.jsx/Form";
import { fetchPdf } from "@/store/entities/pdf/thunk/fetchPdf";
import { vcardSlice } from "@/store/entities/vcard";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function FormContainer() {
  const dispatch = useDispatch();

  const handleRefresh = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(vcardSlice.actions.clearVcards());
      dispatch(fetchPdf(true));
    },
    [dispatch]
  );

  return <Form handleRefresh={handleRefresh} />;
}
