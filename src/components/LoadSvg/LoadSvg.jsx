import React from "react";
import SvgContainer from "@/containers/Svg/Svg";

export default function LoadSvg({
  editHandle,
  changeHandle,
  handleFileChange,
  showChangeButton,
  acivateEditButton,
}) {
  return (
    <>
      <div className="row">
        <h1>Загрузка шаблонов</h1>
      </div>
      <div className="row load-form">
        <form>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="inputFile0" className="form-label">
                Фронтальная сторона:
              </label>
              <input
                type="file"
                accept=".svg"
                className="form-control"
                id="inputFile0"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <SvgContainer index={0} />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="inputFile1" className="form-label">
                Обратная сторона
              </label>
              <input
                type="file"
                accept=".svg"
                className="form-control"
                id="inputFile1"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <SvgContainer index={1} />
              </div>
            </div>
          </div>
          <div className="row">
            {true && (
              <div className="load-form-buttons">
                <button
                  className={`btn btn-primary m-3 ${
                    acivateEditButton ? "" : "disabled"
                  }`}
                  onClick={editHandle}
                >
                  Редактировать визитки
                </button>
                {showChangeButton && (
                  <button
                    className="btn btn-primary m-3"
                    onClick={changeHandle}
                  >
                    Поменять местами
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
