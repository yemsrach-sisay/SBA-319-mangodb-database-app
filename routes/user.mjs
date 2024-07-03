// import express from "express";
// // const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// // const router = express.Router();

// // Create a new user
// router.post("/", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
// routes/user.mjs
import express from "express";
import { getDb } from "../modules/db.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection("user").find().toArray();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const db = getDb();
    const { name, email } = req.body;
    const users = await db.collection("user").insertOne({ name, email });
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
