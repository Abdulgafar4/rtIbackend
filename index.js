import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/index";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://abdulgafar0:aa11ss22@cluster0.ub4yo.mongodb.net/realtech?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use(cors("public"));

// bodyparser setup
app.use(bodyParser.urlencoded({ limit: "25mb", extended: false }));
app.use(bodyParser.json({ limit: "25mb", extended: false }));

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
