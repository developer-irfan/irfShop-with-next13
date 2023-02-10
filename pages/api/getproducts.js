import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`data/products.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "products not found" });
    }
    console.log(data);
    res.status(200).json(JSON.parse(data));
  });
}
