import { Configuration, OpenAIApi } from 'openai'
import { createReadStream } from 'fs'

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: `${process.env.OPENAI_API_KEY}`,
  })
  const openai = new OpenAIApi(configuration)
  try {
    const response = await openai.createImageEdit(
     createReadStream('./public/car-square.png'),
     createReadStream('./public/car-square-mask.png'),
     req.body.prompt,
     1,
    "1024x1024",
    )
    const url = response.data.data[0].url
    res.status(200).json(url)
  } catch (error) {
    if (error.response) {
      console.log('error response status: ', error.response.status)
      console.log('error message: ', error.response.data.error.message)
    } else {
      console.log(error.message)
    }
  }
}