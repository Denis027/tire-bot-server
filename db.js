const express = require("express");
const tiresRouter = require("./routes/tires.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", tiresRouter);

app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
});
