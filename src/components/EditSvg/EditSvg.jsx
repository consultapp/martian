import React, { useState } from "react";
import Form from "../Form.jsx/Form";
import SvgContainer from "@/containers/Svg/Svg";

const EditSvg = ({ svg, fields }) => {
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
      {/* <Form /> */}
    </>
  );
};

export default EditSvg;
