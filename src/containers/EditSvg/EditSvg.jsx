import React, { useState } from "react";
import axios from "axios";
import { API_URL_PDF, SIDE } from "@/constants/fixtures";
import { renderFieldsToSvg } from "@/utils/functions";
import EditSvg from "@/components/EditSvg/EditSvg";
import { useDispatch } from "react-redux";

export default function EditSvgContainer() {
  return <EditSvg />;
}
