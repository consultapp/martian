import React, { useState } from "react";
import SvgContainer from "@/containers/Svg/Svg";
import FormContainer from "@/containers/Form.js/Form";

const EditSvg = () => {
  return (
    <>
      <div className="row">
        <h1>Редактирование шаблонов</h1>
      </div>
      <div className="row">
        <div className="col" key="Svg0">
          <SvgContainer index={0} />
        </div>
        <div className="col" key="Svg1">
          <SvgContainer index={1} />
        </div>
      </div>
      <FormContainer />
    </>
  );
};

export default EditSvg;
