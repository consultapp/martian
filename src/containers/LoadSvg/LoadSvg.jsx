import { useDispatch } from "react-redux";
import { setVcard } from "@/store/entities/vcard/thunk/setVcard";
import LoadSvg from "@/components/LoadSvg/LoadSvg";
import { vcardSlice } from "@/store/entities/vcard";

export default function LoadSvgContainer() {
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const { target } = event;

    if (target.files) {
      dispatch(
        setVcard({
          file: target.files[0],
          index: target.id.at(-1),
        })
      );
    }
  };

  const editHandle = (event) => {
    event.preventDefault();
    dispatch(vcardSlice.actions.enableEditMode());
  };

  const changeHandle = (event) => {
    event.preventDefault();
    dispatch(vcardSlice.actions.switchVcards());
  };

  return (
    <LoadSvg
      editHandle={editHandle}
      changeHandle={changeHandle}
      handleFileChange={handleFileChange}
    />
  );
}
