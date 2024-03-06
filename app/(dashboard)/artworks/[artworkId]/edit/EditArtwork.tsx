'use client';
import { get, post } from '@/utils/apiFetch';
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
import { FieldValues, useForm } from 'react-hook-form';
import { Combobox } from '@/components/ui/combobox';
import { useRouter } from 'next/navigation';

type EditArtworkProps = {
  token: string;
  id: string;
};

export default function EditArtwork({ token, id }: EditArtworkProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const {
    data: artwork,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['artwork', id],
    queryFn: () =>
      get(`${API.artwork}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const form = useForm({
    defaultValues: {
      ...artwork,
    },
  });

  const { data: artists, isSuccess } = useQuery({
    queryKey: ['artist'],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () => get(`${API.artist}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }

  const onUpdateArtwork = async (data: FieldValues) => {
    setLoading(true);

    Object.keys(data)?.map(
      (key) => key !== 'image' ?? form.append(key, data[key]),
    );
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
    console.log(fd);
  };
  if (isError) {
    router.push(`/artworks`);
  }

  console.log(form.control._defaultValues);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onUpdateArtwork)}
        className="space-y-8 mt-4"
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Edit Artwork</h2>
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
                    <ImgUpload
                      imgUrl={field?.value}
                      setFile={field?.onChange}
                    />
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
                  <FormItem className="mb-4">
                    <FormControl>
                      <Combobox
                        val={field?.value}
                        setVal={field?.onChange}
                        open={open}
                        setOpen={setOpen}
                        Artists={artists.data}
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
