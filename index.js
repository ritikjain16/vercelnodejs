import express from "express";
import cors from "cors";
const app = express();

const port = process.env.PORT || 9001;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Ritik</h1>");
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
