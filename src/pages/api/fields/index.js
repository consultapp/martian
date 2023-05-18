// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mockFields } from "@/constants/mockFields";

export default function handler(_, res) {
  res.status(200).json(mockFields);
}
