import { appendFile } from 'fs/promises';
import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const ImgUpload = ({ file, setFile }: Props) => {
  console.log(typeof setFile);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': [],
    },

    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <>
      {file ? (
        <Image
          src={URL.createObjectURL(file)}
          width={384}
          height={320}
          alt="img"
        />
      ) : (
        <div {...getRootProps()} className="bg-black-100 w-96 h-80 text-center">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="pt-32">Drop the Image here ...</p>
          ) : (
            <p className="pt-32">Add an Image</p>
          )}
        </div>
      )}
    </>
  );
};
export default ImgUpload;
