import { Configuration, OpenAIApi } from 'openai'

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: `${process.env.OPENAI_API_KEY}`,
  })
  console.log('fetching image')
  const openai = new OpenAIApi(configuration)
  try {
    const response = await openai.createImage({
      prompt: req.body,
      n: 1,
      size: "1024x1024",
    })
    const url = response.data.data[0].url
    console.log('response is: ', url)
    res.status(200).json(url)
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.resonse.data)
    } else {
      console.log(error.message)
    }
  }
}