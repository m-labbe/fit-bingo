import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TaskSchema = new Schema({
    description: {type: String, required: true}
})

const ChallengeSchema = new Schema({
    name: {type: String, required: true, max: 254},
    tasks: [TaskSchema],
})

export default mongoose.model('Challenge', ChallengeSchema)
