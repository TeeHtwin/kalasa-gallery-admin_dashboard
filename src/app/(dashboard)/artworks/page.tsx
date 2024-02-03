'use client';

import ImgUpload from '@/components/ui/ImgUpload';
import { useState, useEffect } from 'react';

const ArtWork = () => {
  const [file, setFile] = useState<File>();


  return (
    <div>
   
      <ImgUpload file={file} imgUrl={'/vercel.svg'} setFile={setFile} />
    </div>
  );
};
export default ArtWork;
