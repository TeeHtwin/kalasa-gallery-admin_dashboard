'use client';

import CtaBtn from '@/components/ui/CtaBtn';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import ImgUpload from '@/components/ui/ImgUpload';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { get, post } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';

type EditCollectionProps = {
  token: string;
  id: string;
};

export default function EditCollection({ token, id }: EditCollectionProps) {
  const router = useRouter();
  const {
    data: collection,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['collections', id],
    queryFn: () =>
      get(`${API.collections}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });
  const form = useForm({
    defaultValues: {
      ...collection,
    },
  });
  const [loading, setLoading] = useState(false);

  const onUpdateCollection = async (data: FieldValues) => {
    setLoading(true);

    const fd = new FormData();
    Object.keys(data)?.map(
      (key) => key !== 'image' ?? fd.append(key, data[key]),
    );
    const response = await post(
      `${API.collections}`,
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      fd,
    );
    setLoading(false);
    if (response?.success) {
      router.push(`/collections`);
    }
  };

  if (isLoading) {
    return 'Retrieving Collection Detailed Info..';
  }

  if (isError) {
    router.push(`/collections`);
  }

  return (
    <Form {...form}>
      <form
        className="space-y-8 mt-4"
        onSubmit={form.handleSubmit(onUpdateCollection)}
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Edit Collection</h2>
          <CtaBtn disabled={loading}>
            {loading ? <LoadingSpinner /> : 'Submit'}
          </CtaBtn>
        </div>
        <div className="max-w-lg">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => {
              console.log('file image:', field?.value);
              return (
                <FormItem className="mb-4">
                  <FormLabel>Add A Cover Image</FormLabel>
                  <ImgUpload imgUrl={field?.value} setFile={field?.onChange} />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
