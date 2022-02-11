import questions from '../models/questions.js'

export const createQuestion = async (req, res) => {
  try {
    const result = await questions.create(req.body)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
  }
}
