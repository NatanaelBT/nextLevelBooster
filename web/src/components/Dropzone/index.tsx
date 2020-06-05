import React, {useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload} from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded:(file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);

  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'

  
  })
  //aqui coloca multiplos arquivos
  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      { selectedFileUrl 
        ? <img src={selectedFileUrl} alt="Image carregar" />
        : (
          isDragActive ?
          
          <p>
            <FiUpload />
            Solte a imagem do ponto de coleta</p> :
          <p>Arraste e solte a imagem ou click aqui para selecionar</p>

        )

      }

      
      
        
      
    </div>
  )
}

export default Dropzone;