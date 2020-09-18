import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {

  const [selectedFileUrl, setselectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const fileUrl = URL.createObjectURL(file)

    setselectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      
      {selectedFileUrl ? (
        <img src={selectedFileUrl} />
      ) : (
        isDragActive ?
          <p>Solte aqui...</p> :
          <div className="drop-info">
            <FiUpload size="22" color="#07f9a2" />
            <p>Imagem de perfil</p>
          </div>
      )}
    </div>
  )
}

export default Dropzone