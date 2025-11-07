const Library = require("../models/library.js");

const index = async (req, res) => {
  const libraryData = await Library.find()
  console.log("All Data: ", libraryData)
  res.json(libraryData);
}

const show = async (req, res) => {
  const lessonData = await Library.find(req.params.lessonId)
  console.log("Lesson Data: ", lessonData)
  res.json(lessonData);
}

const create = async (req, res) => {
  const newLesson = await Library.create(req.body)
  console.log("New Lesson: ", newLesson)
  res.json(newLesson);
}

const update = async (req, res) => {
  const updatedLesson = await Library.findByIdAndUpdate(req.params.lessonId, req.body)
  console.log("Updated Lesson: ", updatedLesson)
  res.json(updatedLesson);
}

const del = async (req, res) => {
  const deletedLesson = await Library.findByIdAndDelete(req.params.lessonId)
  console.log("Deleted Lesson: ", deletedLesson)
  res.json(deletedLesson);
}






module.exports = {
  index,
  show,
  create,
  update,
  del,
}