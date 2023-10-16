"use client";

import React, { SyntheticEvent } from 'react';
import CTAButton from '@/components/common/CTAButton';
import Header from '@/components/common/PageHeader';
import FormControl from '@/components/form/FormControl';

const ArtWorkCreate = () => {

    const handleArtworkCreate = (e:SyntheticEvent) =>{
        e.preventDefault()
    }
  return (
    <section className='py-10 px-3'>
        <Header title='Gallery creates' />

        <form onSubmit={handleArtworkCreate} className='font-serif'>
        <nav className="flex justify-between mt-4">
      <div className="flex gap-5 items-center">
        <p className="text-primary font-serif">Create Art Work</p>
        
      </div>
     
      <CTAButton title='Submit' />
    </nav>


    <article className='w-[70%] py-7'>
        <h4 className='text-sm'>Add an artwork</h4>
    <main className='grid grid-cols-2'>
        <div className='w-[85%] min-h-[400px] bg-black center text-white capitalize text-sm'>
            add an image
        </div>
        <div className='w-full center flex-col gap-3 justify-around'>
        <FormControl label='artwork name' name='artwork_name' />
        <FormControl label="artist's name" name='artist_name' />
        <FormControl label='year' name='artwork_year' />
        </div>
      </main>

      <main className="grid grid-cols-2 mt-3">
        <div className='w-[85%]'>
        <FormControl label='medium' name='medium' />
        </div>
        <FormControl label="artwork's size" name='artwork_size' />
      </main>

      <main className='mt-3'>
        <label htmlFor="description" className='block capitalize text-[18px]'>Description</label>
        <textarea className='w-full border rounded-md min-h-[220px]' />
      </main>
    </article>

        </form>
    </section>
  )
}

export default ArtWorkCreate