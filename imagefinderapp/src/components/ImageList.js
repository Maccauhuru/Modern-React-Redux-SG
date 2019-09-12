import './ImageList.css'
import React from 'react'

const ImageList = (props) => {
  const images = props.data.images.map(({ id, description, alt_description, urls }) => {
    return (
      <img key={id} src={urls.small} alt={alt_description} />
    )
  }
  )
  return <div className="image-list">
    {images}
  </div>
}

export default ImageList;