'use client';

import ImgUpload from '@/components/ui/ImgUpload';
import { useState, useEffect } from 'react';

const ArtWork = () => {
  const [file, setFile] = useState<File>();


  return (
    <div>
   
      <ImgUpload imgUrl={'/vercel.svg'} setFile={setFile} />
    </div>
  );
};
export default ArtWork;
