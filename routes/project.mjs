// const express = require("express");
// const router = express.Router();
// const Project = require("../models/project");

// // Create a new project
// router.post("/", async (req, res) => {
//   try {
//     const project = new Project(req.body);
//     await project.save();
//     res.status(201).send(project);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all projects
// router.get("/", async (req, res) => {
//   try {
//     const projects = await Project.find().populate("user");
//     res.send(projects);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Update a project
// router.patch("/:id", async (req, res) => {
//   try {
//     const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!project) {
//       return res.status(404).send();
//     }
//     res.send(project);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Delete a project
// router.delete("/:id", async (req, res) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).send();
//     }
//     res.send(project);
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
  res.send("Project route");
});

export default router;
