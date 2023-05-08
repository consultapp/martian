import React, { useEffect } from "react";
import Martian from "@/components/Martian/Martian";
import { useDispatch, useSelector } from "react-redux";
import { fetchFields } from "@/store/entities/fields/thunk/fetchFields";
import { selectIsFieldLoading } from "@/store/entities/fields/selectors";

function MartianContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsFieldLoading);

  useEffect(() => {
    dispatch(fetchFields());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Martian />;
}

export default MartianContainer;
