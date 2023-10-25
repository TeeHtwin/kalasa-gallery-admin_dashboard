import { FormControl } from '@/components';
import React from 'react';
import DatePickerCom from './components/DatePicker';
import Image from 'next/image';

const CreateEventForm = ({ image }: any) => {
  return (
    <article className="font-ariel mt-5">
      <main className="min-h-[340px]">
        <p className="text-medium capitalize">add a cover image</p>

        {image ? (
          <div className="w-[300px] max-h-[240px]">
            <Image
              src={image}
              alt="event_poster_img"
              width={1024}
              height={1024}
              quality={100}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-[50%] h-[340px] bg-black-300 center text-white">
            Add an Image
          </div>
        )}
      </main>

      <main className="w-[80%] grid grid-cols-2 gap-8 mt-4">
        <div>
          <FormControl label="Exhibition name" name="exb_name" />
          <div className="my-3">
            <h5 className="mb-2">Opening Hours</h5>
            <DatePickerCom />
          </div>
        </div>

        <section>
          <div className="w-[60%]">
            <FormControl label="Exhibition Status" name="exb_status" />
          </div>

          <div className="my-3">
            <label className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary">
              Address
            </label>
            <textarea
              name={'exb_address'}
              className="w-full min-h-auto h-[200px] border py-0.5 border-grey-100 rounded-sm resize-none px-2 outline-none"
            />
          </div>
        </section>
      </main>

      <div className="w-[80%]">
        <label className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary">
          Description
        </label>
        <textarea
          name={'exb_desc'}
          className="w-full min-h-[180px] border py-0.5 border-grey-100 rounded-sm resize-none px-2 outline-none"
        />
      </div>
    </article>
  );
};

export default CreateEventForm;
