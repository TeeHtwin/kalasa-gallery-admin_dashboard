
'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { API } from '@/lib/routes';
import { del, get } from '@/utils/apiFetch';

type BlogDetailProps = {
  token: string;
  id: string;
};

const DetailsSection = ({ token, id }: BlogDetailProps) => {
  const router = useRouter();
  const {
    data: blog,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () =>
      get(`${API.blogs}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

const handleDelete = async () => {
  const response = await del(`${API.blogs}/${id}`, {
    Authorization: `Bearer ${token}`,
  });

  if (response?.success) {
    router.push('/blogs');
  }
};

return (
  <>
    <button
      className="text-sm text-[#D40000C7] underline float-right m-4"
      onClick={handleDelete}
    >
      Delete Blog
    </button>
    <div className="flex gap-8 pb-10">
      <Image src={blog?.image} width={300} height={300} alt="iamge" />
      <div className="flex flex-col gap-3">
        <p className="text-primary text-2xl font-semibold">{blog?.title}</p>
        <div className="flex gap-3">
          <p>Title</p>
          <Image src="/red_dot.svg" width={10} height={10} alt="icon" />
          <p>{blog?.title}</p>
        </div>
        <div className="flex gap-3">
          <p>Add Date</p>
          <Image src="/red_dot.svg" width={10} height={10} alt="icon" />
          <p>{blog?.created_at}</p>
        </div>
      </div>
    </div>
    <hr />
    <div className="max-w-[60rem] py-10">
      <p className="text-primary text-2xl font-semibold pb-4">Description</p>
      <span className="">{blog?.description}</span>
    </div>
    <hr />
  </>
);
};
export default DetailsSection;