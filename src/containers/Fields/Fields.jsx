import Fields from "@/components/Fields/Fields";
import { vcardSlice } from "@/store/entities/vcard";
import { selectVcardFields } from "@/store/entities/vcard/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function FieldsContainer() {
  const dispatch = useDispatch();
  const fields = useSelector(selectVcardFields);

  const updateFields = (event) => {
    const { target } = event;
    dispatch(
      vcardSlice.actions.updateFields({
        name: target.name,
        value: target.value,
      })
    );
  };
  return <Fields fields={fields} updateFields={updateFields} />;
}
