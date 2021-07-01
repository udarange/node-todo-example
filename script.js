const Joi = require('Joi')
const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Todo = require('./models/todo')

// database
mongoose.connect('mongodb://localhost/firstmongo')


app.use('/', express.static(path.resolve(__dirname, 'assets')))

// middleware
app.use(express.json())

// Routes
// CURD
// ----------------------------------------------DELETE---------------------------------------------
app.post('/api/delete', async (req, res) => {
  const { record } = req.body
  console.log(record, '/api/delete')

  const response = await Todo.deleteOne({ record })

  console.log(response, '/api/delete repsonse')

  res.json({ status: 'ok' })
})

// ----------------------------------------------UPDATE---------------------------------------------
app.post('/api/modify', async (req, res) => {
  const { old: oldTitle, new: newTitle } = req.body

  const response = await Todo.updateOne(
    { record: oldTitle },
    { $set: { record: newTitle } }                          // set only this field. otherwise replace whole object
  )
  // console.log(response)
  res.json({ status: 'ok' })
})

// ----------------------------------------------READ-----------------------------------------------
app.get('/api/get', async (req, res) => {
  const records = await Todo.find({})
  // console.log('Response => ', records)
  res.json(records)
})

// ----------------------------------------------CREATE---------------------------------------------
app.post('/api/create', async (req, res) => {
  const record = req.body
  console.log(record)

  // {
  //   record: "XXXXXX",
  //   data: {
  //     task: "XXXXXXX"
  //     isCompleted: true
  //   }
  // }

  // * CREATE (_C_RUD)
  const response = await Todo.create(record)
  console.log(response) // same object with id

  res.json({ status: 'ok' })
})

// nexted router
const QuotesRoute = require('./routes/quotes')
app.use('/quotes', QuotesRoute)

// app.post('/', function (req, res) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required()
//   })
//
//   const result = schema.validate(req.body)
//
//   // if (!req.body.name || req.body.name.length <= 3) {
//   //   res.status(400).send("length not enough")
//   //   return;
//   // }
//   if (result.error) {
//     res.status(400).send("length not enough")
//     return
//   }
//
//   res.send(`Hello World ${JSON.stringify(req.body)}`)
// })


app.listen(9001, '127.0.0.1', () => {
  console.log('Server up')
})

