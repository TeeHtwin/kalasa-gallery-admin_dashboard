'use client';

import ImgUpload from '@/components/artworks/ImgUpload';
import { useState, useEffect } from 'react';

const ArtWork = () => {
  const [file, setFile] = useState<File>();


  return (
    <div>
   
      <ImgUpload file={file} setFile={setFile} />
    </div>
  );
};
export default ArtWork;
