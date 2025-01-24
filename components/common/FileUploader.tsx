"use client"
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploader ={
  files: File[] | undefined,
  onChange: (files :  File[]) => void
}

export const  FileUploader = ({files, onChange}: FileUploader ) => {
  const onDrop = useCallback((acceptedFiles : File[]) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const convertFileToUrl = (file: File): string => {
    return URL.createObjectURL(file);
  };

  return (
    <div {...getRootProps()} className='file-upload'>
      {files && files.length >0 ? 
      (
        <Image 
        src={convertFileToUrl(files[0])}
        height={1000}
        width={1000}
        alt='upload Image'
        className='max-h=[400px] overflow-hidden object-cover'
         />
      ) :

      (
        <>
        <Image 
        src="/assets/icons/upload.svg"
        height={45}
        width={45}
        alt='upload icon'
         />
         <div className="file-upload-label">
            <p className="text-14-regular">
              <span className="text-green-500">
                Click to Upload or Drag and Drop
              </span>
            </p>
            <p className='text-center'>
              SVG, PNG, JPG Or Gif max 5mb
            </p>
         </div>
        </>
      )

    }
      <input {...getInputProps()} />
    </div>
  )
}