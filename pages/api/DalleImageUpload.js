import { Configuration, OpenAIApi } from 'openai'
import fs from 'fs'

export default async function handler(req, res) {
  console.log('creating base64 image')
  // const base64 = fs.readFileSync(req.body.image, 'base64')
  const buffer = Buffer.from(req.body.image, 'base64')
  console.log('creating buffer')
  console.log('buffer is: ', buffer)
  console.log('buffer created')
  console.log('writing new file to disk')
  fs.writeFileSync('image.png', buffer)
  console.log('file written to disk')
}