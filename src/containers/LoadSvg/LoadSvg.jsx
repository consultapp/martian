import { useDispatch } from "react-redux";
import { setVcard } from "@/store/entities/vcard/thunk/setVcard";
import LoadSvg from "@/components/LoadSvg/LoadSvg";
import { vcardSlice } from "@/store/entities/vcard";
import { useCallback } from "react";

export default function LoadSvgContainer() {
  const dispatch = useDispatch();

  const handleFileChange = useCallback(
    (event) => {
      const { target } = event;

      if (target.files) {
        dispatch(
          setVcard({
            file: target.files[0],
            index: target.id.at(-1),
          })
        );
      }
    },
    [dispatch]
  );

  const editHandle = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(vcardSlice.actions.enableEditMode());
    },
    [dispatch]
  );

  const changeHandle = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(vcardSlice.actions.switchVcards());
    },
    [dispatch]
  );

  return (
    <LoadSvg
      editHandle={editHandle}
      changeHandle={changeHandle}
      handleFileChange={handleFileChange}
    />
  );
}
