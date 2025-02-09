import React from 'react'

function imageUpload() {
    function convertToBase64(e) {
        console.log(e)
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
        }
        reader.onerror = error => {
            console.log("Error ", error)
        }
    }

  return (
    <div>imageUpload</div>
  )
}

export default imageUpload