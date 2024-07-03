// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
// let db;
// const connectDB = async () => {
//   try {
//     db = await mongoose.connect(process.env.MONGODB_URI);
//     console.log("MongoDB connected...");
//     return db;
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

// db.mjs
// db.mjs
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("Task-Manager");
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database. Error:", err);
    process.exit(1);
  }
}

function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call client.connect first.");
  }
  return db;
}

export { connectDB, getDb };
export default connectDB;
