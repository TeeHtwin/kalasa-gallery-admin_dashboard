import { appendFile } from 'fs/promises';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

interface Props {
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const ImgUpload = ({ file, setFile }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
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
      <div
        {...getRootProps()}
        className="border-dashed border-2 w-96 h-80 text-center"
      >
        <input {...getInputProps()} />
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            width={384}
            height={320}
            alt="img"
            className="object-contain w-full h-full"
          />
        ) : (
          <p className="pt-32">Add an Image</p>
        )}
      </div>
    </>
  );
};
export default ImgUpload;