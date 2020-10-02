// pages/api/data.js
// route => /api/data
import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "okay" });
  })
  .post((req, res) => {
    res.json({ message: "posted" });
  });

export default handler;
