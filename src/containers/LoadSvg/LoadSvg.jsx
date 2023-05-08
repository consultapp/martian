import { useDispatch, useSelector } from "react-redux";
import { selectFieldIEntities } from "@/store/entities/fields/selectors";
import { setVcard } from "@/store/entities/vcard/thunk/setVcard";
import LoadSvg from "@/components/LoadSvg/LoadSvg";
import { vcardSlice } from "@/store/entities/vcard";

export default function LoadSvgContainer({ handleFilesLoaded }) {
  const dispatch = useDispatch();
  const fieldEntities = useSelector(selectFieldIEntities);

  const handleFileChange = (event) => {
    const { target } = event;
    console.log("setVcard", setVcard);

    if (target.files) {
      // function onChange(event) {
      //   var file = event.target.files[0];
      //   var reader = new FileReader();
      //   reader.readAsDataURL(file);

      dispatch(
        setVcard({
          file: target.files[0],
          index: target.id.at(-1),
          fieldEntities,
        })
      );
    }
  };

  const editHandle = (event) => {
    event.preventDefault();
    dispatch(vcardSlice.actions.goToVcardEdit());
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
