import CTAButton from '@/components/common/CTAButton';
import ToggleButton from '@/components/common/ToggleButton';
import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import TableCom from '@/components/table/TableCom';

const ArtWork = () => {
  return (
    <section className="min-h-full p-4">
      <Header title="Galleries" />

      <nav className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p className="text-primary font-serif">Total Material Lists</p>
          <div className="w-12 rounded-md border border-grey h-7 flex justify-center items-center">
            15
          </div>
        </div>
        <Link href={'/artworks/createartwork'}>
          <CTAButton title="Create Artwork" />
        </Link>
      </nav>

      <main>
        {/* that gonna be CSR */}
        <article className="w-[75%] flex gap-3 my-3 text-btnText">
          <div className="border flex-1 rounded flex py-1 px-3">
            <span>icon</span>
            <input type="text" placeholder="Search By Name" />
          </div>

          <div className="w-[15%] border rounded flex py-1 px-3">
            <p>Sort By</p>
            <span>i</span>
          </div>

          <div className="border rounded flex flex-1 py-1 px-3">
            <p>Sep 16th 2022 - Sep 27th 2022</p>
            <span>icon</span>
          </div>
        </article>

        <div className="flex justify-between items-center text-primary py-2 text-btnText">
          <div>
            <input type="checkbox" />
            <label htmlFor="" className="ml-2">
              Quick Action
            </label>
          </div>
          <div className="">
            Sort By <span>icon</span>
          </div>
        </div>
        <TableCom />

        <div className="py-2 mt-2 flex justify-end items-center gap-3">
          <button className="w-6 h-6 text-btnText center border border-primary">
            prev
          </button>
          <button className="w-6 h-6 text-btnText center border border-primary bg-primary text-white">
            1
          </button>
          <button className="w-6 h-6 text-btnText center border border-primary">
            2
          </button>
          <button className="w-6 h-6 text-btnText center border border-primary">
            3
          </button>
          <button className="w-6 h-6 text-btnText center border border-primary">
            next
          </button>
        </div>
      </main>
    </section>
  );
};
export default ArtWork;
