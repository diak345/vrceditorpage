const toPublicUrl = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replaceAll(' ', '%20')}`

const isImageFile = (fileName) => /\.(jpg|jpeg|png|webp|gif)$/i.test(fileName)

const getVideoMimeType = (fileName) => {
  if (/\.webm$/i.test(fileName)) {
    return 'video/webm'
  }
  return 'video/mp4'
}

function MediaViewer({ fileName, alt }) {
  const src = toPublicUrl(fileName)

  if (isImageFile(fileName)) {
    return <img src={src} alt={alt} loading="lazy" />
  }

  return (
    <video controls preload="metadata" playsInline>
      <source src={src} type={getVideoMimeType(fileName)} />
    </video>
  )
}

export default MediaViewer
