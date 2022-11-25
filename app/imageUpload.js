import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./firebase"
import { useState } from "react"

export default function ImageUpload() {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageURLs, setImageURLs] = useState([])
  const [showInput, setShowInput] = useState(true)

  function handleUpload() {
    console.log('handleUpload')
    const imageRef = ref(storage, 'images/' + imageUpload.name)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot, ref).then((url) => {
        setImageURLs([...imageURLs, url])
      })
    })
    console.log('image uploaded', imageUpload)
    setShowInput(false)
  }

  return (
    <div>
        {showInput ?
        <>
          <input
            id="image-upload"
            type="file"
            onChange={(e) => { setImageUpload(e.target.files[0]) }}
          />
          <button onClick={handleUpload}>Upload Image</button>
        </>
        :
        <>
          <span>Image uploaded</span>
          <button disabled>Thank you</button>
        </>
        }
    </div>
  )
}