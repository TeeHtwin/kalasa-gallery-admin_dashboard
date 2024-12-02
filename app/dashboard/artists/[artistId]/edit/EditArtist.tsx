'use client';

import React, { useState, useEffect } from 'react';
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
import { useQuery } from '@tanstack/react-query';
import { get } from '@/utils/apiFetch';

type EditArtistProps = {
  token: string;
  artistId: string;
};

export default function EditArtist({ artistId, token }: EditArtistProps) {
  const [loading, setLoading] = useState(false);
  const {
    data: artist,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['artist', artistId],
    queryFn: () =>
      get(`${API.artist}/${artistId}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const form = useForm();

  useEffect(() => {
    if (!isLoading && !isError && artist) {
      // Reset the form with fetched data
      form.reset({
        profile_image: artist.profile_image,
        name: artist.name,
        description: artist.description,
      });
    }
  }, [isLoading, isError, artist, form]);
  const onCreateArtist = async (data: FieldValues) => {
    console.log('values::', data);
    setLoading(true);
    // const fd: FormData = new FormData();
    // Object.keys(data)?.map((key) => fd.append(key, data[key]));
    const response = await post(
      `${API.artist}/${artistId}`,
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      data,
    );
    console.log(response);

    setLoading(false);

    // console.log('create response::', response);
    console.log(token);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateArtist)}
        className="space-y-8 mt-4"
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Create Collection</h2>
          <CtaBtn disabled={loading}>
            {loading ? <LoadingSpinner /> : 'Submit'}
          </CtaBtn>
        </div>
        <div className="max-w-lg">
          <FormField
            control={form.control}
            name="profile_image"
            render={({ field }) => {
              return (
                <FormItem className="mb-4">
                  <FormLabel>Add an Image</FormLabel>
                  <ImgUpload file={field?.value} setFile={field?.onChange} />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Artist&apos; Name</FormLabel>
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
