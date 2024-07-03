// import express from "express";
// import connectDB from "./modules/db.mjs";
// // import userRoutes from "./routes/user.mjs";
// import projectRoutes from "./routes/project.mjs";
// import taskRoutes from "./routes/task.mjs";
// import dotenv from "dotenv";
// import userRoutes from "./routes/user.mjs";
// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to the database
// connectDB();

// // Routes
// app.use("/users", userRoutes);
// app.use("/projects", projectRoutes);
// app.use("/tasks", taskRoutes);

// // Setting up the view engine
// app.set("view engine", "ejs");

// // Basic route
// app.get("/", (req, res) => {
//   res.render("index");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// index.mjs
// index.mjs
import express from "express";
import connectDB from "./modules/db.mjs";
import userRoutes from "./routes/user.mjs";
import projectRoutes from "./routes/project.mjs";
import taskRoutes from "./routes/task.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Routes
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// Setting up the view engine
app.set("view engine", "ejs");

// Basic route
app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
