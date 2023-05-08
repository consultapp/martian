import React, { useState } from "react";
import axios from "axios";
import Form from "./Form.jsx/Form";
import { API_URL_PDF, SIDE } from "@/constants/fixtures";
import SvgContainer from "@/containers/Svg/Svg";
import { renderFieldsToSvg } from "@/utils/functions";

const initialDownload = ["", ""];

const EditSvg = ({ svg, startFields, handleRefresh }) => {
  const [fields, setFields] = useState(startFields);
  const [download, setDownload] = useState(initialDownload);
  const [isLoading, setLoading] = useState(false);

  async function makePdfFile() {
    try {
      const promises = [];

      console.log(svg);
      svg.forEach(
        (item, i) =>
          item &&
          promises.push(
            axios.post(
              `${API_URL_PDF}${SIDE[i]}`,
              renderFieldsToSvg(item, fields),
              {
                headers: {
                  "Content-Type": "image/svg+xml",
                },
              }
            )
          )
      );

      const result = await Promise.all(promises);
      setDownload(result.map(({ data }, i) => data.resultName));
    } catch (event) {
      console.error(`Axios: ${event.message}`);
    }
    setLoading(false);
  }

  function handleMakePdf(event) {
    event.preventDefault();
    setDownload(initialDownload);
    setLoading(true);
    makePdfFile();
  }

  return (
    <>
      <div className="row">
        <h1>Редактирование шаблонов</h1>
      </div>
      <div className="row">
        {svg.map((item, i) => {
          return item ? (
            <div className="col" key={`Svg${i}`}>
              <SvgContainer svg={item} fields={fields} alt={`Svg${i}`} />
            </div>
          ) : (
            <div className="col" key={`Svg${i}`}>
              Нет второго шаблона
            </div>
          );
        })}
      </div>
      <Form
        fields={fields}
        setFields={setFields}
        handleMakePdf={handleMakePdf}
        download={download}
        isLoading={isLoading}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default EditSvg;
