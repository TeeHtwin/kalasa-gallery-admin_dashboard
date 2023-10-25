'use client';
import { useRef } from 'react';
import { EventCard, CTAButton } from '@/components';
import chevronDown from '@/assets/icons/chevrondown.svg';
import ImageIconCom from '@/components/common/ImageIconCom';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import plusIcon from '@/assets/icons/plus.svg';

const Events = () => {
  const searchText = useRef();
  return (
    <section className="min-h-full p-4">
      <Header title="Events" />

      <nav className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p className="text-primary font-serif">Total Events</p>
          <div className="w-12 rounded-md border text-primary font-heading font-ariel h-7 flex justify-center items-center">
            15
          </div>
        </div>
        <Link href={'/events/createevent'}>
          <CTAButton icon={plusIcon} title="Create Events" />
        </Link>
      </nav>
      <section className="min-h-full p-4">
        <PageHeaderBox
          searchText={searchText.current}
          handlerSearch={() => console.log('hi')}
        />

        <div className="flex justify-between items-center text-primary py-2 text-btnText">
          <div>
            {false ? (
              <div className="flex gap-2 bg-secondary-light border border-primary py-1 rounded-full px-2">
                <button onClick={() => {}}>multiple delete</button>
                <button onClick={() => {}}>X</button>
              </div>
            ) : (
              <label htmlFor="checkbox" className="ml-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="apperance-none mr-1"
                  // onClick={() => setQuickAction(!quickAction)}
                />
                Quick Action
              </label>
            )}
          </div>
          <button
            // onClick={() => handleSort()}
            className="block center gap-2 text-primary"
          >
            Sort By <ImageIconCom src={chevronDown} />
          </button>
        </div>

        <div className="flex flex-col gap-y-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </section>
  );
};
export default Events;
