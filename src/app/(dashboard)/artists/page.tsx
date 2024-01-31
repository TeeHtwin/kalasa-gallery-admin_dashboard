'use client';
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlinePencilAlt } from 'react-icons/hi';
import CtaBtn from '@/components/CtaBtn';

const Artist = () => {
  const handleCreate = () => {
    console.log('Create Artist');
  };

  const handleUpdate = () => {
    console.log('Update Artist');
  };

  return (
    <div>
      <CtaBtn onClick={handleCreate}>
      <HiOutlinePlus />
        Create Artist
      </CtaBtn>
      <br />
      <CtaBtn onClick={handleUpdate}>
        <HiOutlinePencilAlt />
        Update Artist
      </CtaBtn>
    </div>
  );
};
export default Artist;
