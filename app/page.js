'use client'

import { useState } from "react"
import DalleImage from "./dalleImage"

export default function Page() {
  const [header, setHeader] = useState('')
  const [content, setContent] = useState('')
  const [storedPrompt, setStoredPrompt] = useState('')
  const [prompt, setPrompt] = useState('')
  const [showImage, setShowImage] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setPrompt(storedPrompt)
    setShowImage(true)
  }

  function handleReset(e) {
    e.preventDefault()
    setHeader('')
    setContent('')
    setStoredPrompt('')
    setPrompt('')
    setShowImage(false)
  }

  return (
    <div>
      <form>
        <label>Header: </label>
        <input type="text" value={header} onChange={e => setHeader(e.target.value)} />

        <label>Content: </label>
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />

        <label>Prompt: </label>
        <input type="text" value={storedPrompt} onChange={e => setStoredPrompt(e.target.value)} />
        <button onClick={handleSubmit}>Create Image</button>
        <button onClick={handleReset}>Reset</button>
      </form>

      {showImage && 
        <DalleImage header={header} content={content} prompt={prompt} />
      }
    </div>
  )
}