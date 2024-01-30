'use client'

import CtaBtn from "@/components/ctaBtn/CtaBtn";

const Artist = () => {

  const handleCreate = () => {
    console.log('Create Artist');
  }

  const handleUpdate = () => {
    console.log('Update Artist');
  }
  

  return <div>
    <CtaBtn onClick={handleCreate} src='/next.svg'>Create Artist</CtaBtn>
    <br/>
    <CtaBtn onClick={handleUpdate} src='/vercel.svg'>Update Artist</CtaBtn>
  </div>;
};
export default Artist;
