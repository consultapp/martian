import React, { useEffect, useState } from "react";
import Martian from "@/components/Martian/Martian";
import { useDispatch, useSelector } from "react-redux";
import { fetchFields } from "@/store/entities/fields/thunk/fetchFields";
import { selectIsFieldLoading } from "@/store/entities/fields/selectors";

const startState = { svg: [null, null], fields: {} };

function MartianContainer() {
  const [state, setState] = useState(startState);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsFieldLoading);

  const handleFilesLoaded = (result) => {
    setState(result);
  };

  const handleRefresh = () => {
    setState(startState);
  };

  const steps = [,];

  useEffect(() => {
    dispatch(fetchFields());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Martian
      state={state}
      handleFilesLoaded={handleFilesLoaded}
      handleRefresh={handleRefresh}
    />
  );
}

export default MartianContainer;
