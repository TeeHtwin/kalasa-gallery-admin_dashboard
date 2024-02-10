'use client';

import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import Breadcrumb from '@/components/ui/Breadcrumb';
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
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function page() {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const onCreateCollection = async (data: FieldValues) => {
    console.log('values::', data);
    setLoading(true);
    const fd = new FormData();
    Object.keys(data)?.map((key) => fd.append(key, data[key]));
    const response = await post(
      `${API.collections}`,
      {
        'Content-Type': 'multipart/form-data',
      },
      fd,
    );

    setLoading(false);

    console.log('create response::', response);
  };
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections' },
          { name: 'Create Collection' },
        ]}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onCreateCollection)}
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
              name="image"
              render={({ field }) => {
                return (
                  <FormItem className="mb-4">
                    <FormLabel>Add A Cover Image</FormLabel>
                    <ImgUpload file={field?.value} setFile={field?.onChange} />
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
    </div>
  );
}
