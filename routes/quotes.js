const express = require('express')
const router = express.Router()
const Todo = require('./models/todo')

// get all
router.get('/', async (req, res) => {
  const records = await Todo.find({})
  // console.log('Response => ', records)
  res.json(records)
})

// get specific
router.get('/get/:id', async (req, res) => {
  const records = await Todo.findById({ _id: req.params.id })
  // console.log('Response => ', records)
  res.json(records)
})

// create
router.post('/create', async (req, res) => {
  const newTodo = new Todo(req.body)
  // console.log(record)

  // * CREATE (_C_RUD)
  const response = await newTodo.save()
  console.log(response) // same object with id

  res.json({ status: 'ok' })
})

// delete
router.delete('/delete/:id', async (req, res) => {
  const records = await Todo.findByIdAndDelete({ _id: req.params.id })
  // console.log('Response => ', records)
  res.json(records)
})

router.patch('/update/:id', async (req, res) => {
  const response = await Todo.updateOne(
    { _id: req.params.id },
    { $set: { record: newTitle } }
  )

  // console.log(response)

  res.json({ status: 'ok' })
})

module.exports = router
