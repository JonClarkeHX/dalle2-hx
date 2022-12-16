'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import ImageContainer from "./imageContainer"
import ImageUpload from "./imageUpload"
import styles from './styles.module.css'

export default function Page() {
  const [header, setHeader] = useState("Secure parking that's very close to the airport.")
  const [content, setContent] = useState("It's all eyes on your car when you park in a secured car park with CCTV.")
  const [prompt, setPrompt] = useState('Red car surrounded by CCTV cameras, there are lots of CCTV cameras')
  const [url, setUrl] = useState("/sean-oulashin-KMn4VEeEPR8-unsplash.jpg")
  const [uploadImageUrl, setUploadImageUrl] = useState('default-image')
  const [uploadMaskUrl, setUploadMaskUrl] = useState('default-mask')

  const router = useRouter()

  async function update(prompt, refresh) {
    const res = await fetch('/api/DalleImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/html',
      },
      body: prompt
    })
    setUrl(await res.json())
    refresh()
  }

  async function updateWithImage(prompt, image, mask, refresh) {
    const data = {prompt: prompt, image: image, mask: mask}
    const res = await fetch('/api/DalleImageUpload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    setUrl(await res.json())
    refresh()
  }
  
  async function handleSubmit(e) {
    e.preventDefault()
    update(prompt, router.refresh)
  }

  async function handleUploadedImage(e) {
    e.preventDefault()
    const image = uploadImageUrl
    const mask = uploadMaskUrl
    updateWithImage(prompt, image, mask, router.refresh)
  }

  function handleReset(e) {
    e.preventDefault()
    setHeader('')
    setContent('')
    setPrompt('')
  }

  function setNewUploadImageURL(url) {
    setUploadImageUrl(url)
  }

  function setNewUploadMaskURL(url) {
    setUploadMaskUrl(url)
  }

  return (
    <div>
      <ImageContainer header={header} content={content} url={url} />
      <form id="form">
        <label>Header: </label>
        <input className={styles.input} type="text" value={header} onChange={e => setHeader(e.target.value)} />
        <br />
      
        <label>Content: </label>
        <input className={styles.input} type="text" value={content} onChange={e => setContent(e.target.value)} />
        <br />

        <textarea form="form" value={prompt} onChange={e => setPrompt(e.target.value)}
          rows="8" cols="75" />
        <br />

        <button onClick={handleSubmit}>Create New Image</button>
        <button onClick={handleUploadedImage}>Create New Image With Mask</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <ImageUpload setNewUploadImageURL={setNewUploadImageURL} setNewUploadMaskURL={setNewUploadMaskURL} />
      <p>Upload image url: {uploadImageUrl}</p>
      <p>Upload mask url: {uploadMaskUrl}</p>
    </div>
  )
}