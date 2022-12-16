import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"
import { useState } from "react"

export default function ImageUpload({ setNewUploadImageURL, setNewUploadMaskURL }) {
  const [imageUpload, setImageUpload] = useState(null)
  const [maskUpload, setMaskUpload] = useState(null)
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
    const maskRef = ref(storage, 'masks/' + maskUpload.name)
    uploadBytes(maskRef, maskUpload).then(() => {
      getDownloadURL(maskRef).then((url) => {
        setNewUploadMaskURL(url)
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
          <label htmlFor="image-upload">Upload Image: </label>
          <input
            id="image-upload"
            type="file"
            onChange={(e) => { setImageUpload(e.target.files[0]) }}
          />
          < br />
          <label htmlFor="mask-upload">Upload Mask: </label>
          <input
            id="mask-upload"
            type="file"
            onChange={(e) => { setMaskUpload(e.target.files[0]) }}
          />
          < br />
          <button onClick={handleUpload}>Upload Images</button>
        </>
        :
        <>
          <span>Image uploaded</span>
        </>
        }
    </div>
  )
}