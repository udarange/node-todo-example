const mongoose = require('mongoose')

const nextedSchema = new mongoose.Schema({
	task: { type: String, required: true },
	isCompleted: { type: Boolean, required: true, default: false },
})

const TodoSchema = new mongoose.Schema({
	record: { type: String, required: true },
	date: { type: Number, required: true, default: Date.now },
	data: nextedSchema
})

const model = mongoose.model('TodoModel', TodoSchema)

module.exports = model
