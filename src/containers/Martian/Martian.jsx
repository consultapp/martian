import React, { useEffect } from "react";
import Martian from "@/components/Martian/Martian";
import { useDispatch, useSelector } from "react-redux";
import { fetchFields } from "@/store/entities/fields/thunk/fetchFields";
import { selectIsFieldLoading } from "@/store/entities/fields/selectors";
import { selectVcardEditMode } from "@/store/entities/vcard/selectors";

function MartianContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsFieldLoading);
  const editMode = useSelector(selectVcardEditMode);
  console.log("editMode", editMode);

  useEffect(() => {
    dispatch(fetchFields());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Martian editMode={editMode} />;
}
export default MartianContainer;
