import React, { useState } from "react";
import axios from "axios";
import { API_URL_PDF, SIDE } from "@/constants/fixtures";
import { renderFieldsToSvg } from "@/utils/functions";
import EditSvg from "@/components/EditSvg/EditSvg";
import { useDispatch } from "react-redux";

export default function EditSvgContainer() {
  const [download, setDownload] = useState();

  const dispatch = useDispatch();

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

  return <EditSvg />;
}
