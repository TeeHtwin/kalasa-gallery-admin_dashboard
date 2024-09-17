//@ts-ignore
import { appendFile } from 'fs/promises';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

interface Props {
  file?: any;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

function isImageUrl(url: any) {
  const imageExtensions = /\.(jpg|jpeg|png|gif|svg)$/i; // Case-insensitive matching for extensions
  const validUrlPatterns = [
    // Common image hosting patterns
    /^https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|svg)$/i,
    // Data URI patterns (base64 encoded images)
    /^data:image\/(png|gif|jpeg);base64,.+$/i,
  ];

  // Check for extension match and one of the valid URL patterns
  return (
    imageExtensions.test(url) &&
    validUrlPatterns.some((pattern) => pattern.test(url))
  );
}

const ImgUpload = ({ file, setFile }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': [],
    },

    onDrop: (acceptedFiles) => {
      // file = undefined;
      setFile(acceptedFiles[0]);
    },
  });
  let displayImage;

  if (file instanceof File && !isImageUrl(file)) {
    displayImage = URL.createObjectURL(file);
  } else {
    displayImage = file;
  }

  return (
    <>
      <div
        {...getRootProps()}
        className="border-dashed border-2 w-96 h-80 text-center"
      >
        <input {...getInputProps()} />
        {displayImage ? (
          <Image
            src={displayImage}
            width={384}
            height={320}
            alt="Fetched Data Image"
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
