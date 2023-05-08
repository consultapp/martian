import React from "react";
import EditSvg from "../EditSvg";
import LoadSvgContainer from "@/containers/LoadSvg/LoadSvg";

function Martian({ editMode }) {
  return (
    <div className="container-sm main">
      {!editMode ? <LoadSvgContainer /> : <EditSvg />}
      <div className="row">
        <p>
          <a href="/static/v2_front.svg" download="v2_front.svg">
            Фронт шаблон
          </a>
        </p>
        <p>
          <a href="/static/v2_rev.svg" download="v2_rev.svg">
            Обратн. шаблон
          </a>
        </p>
        <p>Шаблон, который ищется в файлах: __FIELD_tag__</p>
        <p>Например: __FIELD_NAME__, __FIELD_PHONE__ и тд</p>
      </div>
    </div>
  );
}

export default Martian;
