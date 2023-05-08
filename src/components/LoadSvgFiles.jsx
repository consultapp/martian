import patternField from "@/utils/functions";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFieldIEntities } from "@/store/entities/fields/selectors";
import SvgContainer from "@/containers/Svg/Svg";
import { setVcard } from "@/store/entities/vcard/thunk/setVcard";

export default function LoadSvgFiles({ handleFilesLoaded }) {
  const [state, setState] = useState({ svg: [null, null], fields: {} });

  const dispatch = useDispatch();

  const fieldEntities = useSelector(selectFieldIEntities);

  const v1 = useRef();
  const v2 = useRef();

  const handleFileChange = (event) => {
    const { target } = event;

    if (target.files) {
      // function onChange(event) {
      //   var file = event.target.files[0];
      //   var reader = new FileReader();
      //   reader.onload = function(event) {
      //     // The file's text will be printed here
      //     SET STATE HERE FOR URL!!!!

      //   };

      //   reader.readAsDataURL(file);
      // }

      dispatch(
        setVcard({
          file: target.files[0],
          index: target.id.at(-1),
          fieldEntities,
        })
      );
    }
  };
  function getFields(fieldsArr) {
    const filterMock = fieldEntities.filter((item) => {
      return fieldsArr.includes(patternField(item.tag));
    });

    const result = { ...state.fields };
    filterMock.forEach((item) => {
      result[item.tag] = item.mock;
    });

    return result;
  }

  const editHandle = (event) => {
    event.preventDefault();
    if (state.svg[0]) {
      handleFilesLoaded(state);
    }
  };

  const changeHandle = (event) => {
    event.preventDefault();
    const newSvg = [state.svg[1], state.svg[0]];
    const tmp = v1.value;
    v1.value = v2.value;
    v2.value = tmp;
    setState({ ...state, svg: newSvg });
  };

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
                ref={v1}
                accept=".svg"
                className="form-control"
                id="inputFile0"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <SvgContainer svg={state.svg[0]} fields={state.fields} />
              </div>
            </div>
            <div className="col mb-3">
              <label htmlFor="inputFile1" className="form-label">
                Обратная сторона
              </label>
              <input
                type="file"
                ref={v2}
                accept=".svg"
                className="form-control"
                id="inputFile1"
                onChange={handleFileChange}
              />
              <div className="load-files-render">
                <SvgContainer svg={state.svg[1]} fields={state.fields} />
              </div>
            </div>
          </div>
          <div className="row">
            {state.svg[0] && (
              <div className="load-form-buttons">
                <button className="btn btn-primary m-3" onClick={editHandle}>
                  Редактировать визитки
                </button>
                <button className="btn btn-primary m-3" onClick={changeHandle}>
                  Поменять местами
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
