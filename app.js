const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Ini untuk melayani file HTML/CSS/JS dari folder "public"
app.use(express.static(path.join(__dirname, "public")));

db.sequelize.sync();
//db.sequelize.sync({ force: true }); //saat pengembangan awal untuk memastikan struktur tabel sesuai model. Setelah semuanya berjalan, kembalikan ke: db.sequelize.sync();

const bookRoutes = require("./routes/book.routes");
app.use("/api/books", bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
