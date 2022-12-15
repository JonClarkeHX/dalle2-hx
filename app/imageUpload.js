import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"
import { useState } from "react"

export default function ImageUpload({ setNewUploadImageURL }) {
  const [imageUpload, setImageUpload] = useState(null)
  const [showInput, setShowInput] = useState(true)

  function handleUpload() {
    const imageRef = ref(storage, 'images/' + imageUpload.name)
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setNewUploadImageURL(url)
      }).catch((error) => {
        console.log('getDownloadURL error is: ', error)
      })
    }).catch((error) => {
      console.log('uploadBytes error is: ', error)
    })
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
        </>
        }
    </div>
  )
}