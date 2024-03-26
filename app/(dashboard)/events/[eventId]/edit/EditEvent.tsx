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

type EditEventProps = {
  token: string;
  id: string;
};

export default function EditEvent({ token, id }: EditEventProps) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const {
    data: event,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['events', id],
    queryFn: () =>
      get(`${API.events}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const form: any = useForm({
    defaultValues: {
      ...event,
    },
  });

  const onUpdateEvent = async (data: FieldValues) => {
    setLoading(true);

    Object.keys(data)?.map(
      (key) => key !== 'image' ?? form.append(key, data[key]),
    );
    const response = await post(
      `${API.events}`,
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      form,
    );
    setLoading(false);
    if (response?.success) {
      router.push(`/events`);
    }
  };

  if (isLoading) {
    return 'Retrieving Event Detailed Info..';
  }

  if (isError) {
    router.push(`/events`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onUpdateEvent)}
        className="space-y-8 mt-4"
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Edit Event</h2>
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
                  <ImgUpload imgUrl={field?.value} setFile={field?.onChange} />
                </FormItem>
              );
            }}
          />
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Exhibition name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Exhibition Status</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>Opening Hours</div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="opening_date"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" className="min-w-44" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="closing_date"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Close Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" className="min-w-44" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="opening_time"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Start Time</FormLabel>
                  <FormControl>
                    <Input {...field} type="time" className="min-w-44" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="closing_time"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Close Time</FormLabel>
                  <FormControl>
                    <Input {...field} type="time" className="min-w-44" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Textarea {...field} />
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
