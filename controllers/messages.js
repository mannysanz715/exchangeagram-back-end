import { Message } from '../models/message.js'
import { Profile } from '../models/profile.js'

async function createMessage(req, res) {
  console.log('TEST')
  try {
    req.body.author = req.user.profile
    const message = await Message.create(req.body)
    res.status(201).json(message)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function messageIndex(req, res) {
  try {
    const messages = await Message.find({})
    .populate('author')
    res.status(200).json(messages)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  createMessage,
  messageIndex
}