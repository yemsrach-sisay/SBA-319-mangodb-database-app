// const express = require("express");
// const router = express.Router();
// const Task = require("../models/task");

// // Create a new task
// router.post("/", async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all tasks
// router.get("/", async (req, res) => {
//   try {
//     const tasks = await Task.find().populate("project");
//     res.send(tasks);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Update a task
// router.patch("/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res.status(404).send();
//     }
//     res.send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Delete a task
// router.delete("/:id", async (req, res) => {
//   try {
//     const task = await Task.findByIdAndDelete(req.params.id);
//     if (!task) {
//       return res.status(404).send();
//     }
//     res.send(task);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;

import express from "express";

const router = express.Router();

// Define your routes here
// Example route
router.get("/", (req, res) => {
  res.send("Task route");
});

export default router;
