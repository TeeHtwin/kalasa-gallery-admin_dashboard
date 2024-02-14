'use client';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import CtaBtn from '@/components/ui/CtaBtn';
import ImgUpload from '@/components/ui/ImgUpload';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { API } from '@/lib/routes';
import { post } from '@/utils/apiFetch';
import { FieldValues, useForm } from 'react-hook-form';
import { Combobox } from '@/components/ui/combobox';
import { useRouter } from 'next/navigation';

type CreateArtworkProps = {
  token: string;
};

export default function CreateArtwork({ token }: CreateArtworkProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [val, setVal] = React.useState('');
  const router = useRouter();
  const {
    isFetching,
    data: artists,
    isError,
  } = useQuery({
    queryKey: ['artists'],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () => get(`${API.artist}`, { Authorization: `Bearer ${token}` }),
  });

  const form = useForm({
    defaultValues: {
      artist_id: artists?.length > 0 ? artists[0]?.id : null,
      image: undefined,
      name: '',
      year: '',
      category_id: '',
      size: '',
      description: '',
    },
  });

  if (isFetching) {
    return 'Retrieving data...';
  }

  const onCreateArtwork = async (data: FieldValues) => {
    console.log('values::', data);
    setLoading(true);
    const fd = new FormData();
    Object.keys(data)?.map((key) => fd.append(key, data[key]));
    const response = await post(
      `${API.artwork}`,
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      fd,
    );

    setLoading(false);
    if (response?.success) {
      router.push(`/artworks`);
    }

    console.log('create response::', response);
  };
  console.log(val);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateArtwork)}
        className="space-y-8 mt-4"
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Create Artwork</h2>
          <CtaBtn disabled={loading}>
            {loading ? <LoadingSpinner /> : 'Submit'}
          </CtaBtn>
        </div>
        <div className="w-5/6">
          <div className="grid grid-cols-2">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => {
                return (
                  <FormItem className="mb-4">
                    <FormLabel className="text-base">Add an Image</FormLabel>
                    <ImgUpload file={field?.value} setFile={field?.onChange} />
                  </FormItem>
                );
              }}
            />
            <div className="mt-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Artwork Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="artist_id"
                render={({ field }) => (
                  <FormItem className="mb-4 flex flex-col">
                    <FormLabel className="mb-2">Artist Name</FormLabel>
                    <FormControl>
                      <Combobox
                        val={field?.value}
                        setVal={field?.onChange}
                        open={open}
                        setOpen={setOpen}
                        Artists={artists}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Medium</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel>Artwork&apos;s Size</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
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
