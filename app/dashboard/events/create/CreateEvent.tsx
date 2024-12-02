'use client';

import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type TokenProps = {
  token: string;
};

const CreateEvent = ({ token }: TokenProps) => {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const onCreateEvent = async (data: FieldValues) => {
    console.log('values::', data);
    setLoading(true);
    const fd = new FormData();
    Object.keys(data)?.map((key) => fd.append(key, data[key]));
    const response = await post(
      `${API.events}`,
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      fd,
    );

    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateEvent)}
        className="space-y-8 mt-4"
      >
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Create Event</h2>
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
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="event_name"
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
                <FormItem>
                  <FormLabel>Exhibition Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="upcoming">upcoming</SelectItem>
                      <SelectItem value="ongoing">ongoing</SelectItem>
                      <SelectItem value="done">done</SelectItem>
                    </SelectContent>
                  </Select>
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
};
export default CreateEvent;
