'use client';
import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface IListBoxProps {
  reportMonth: string;
  setReportMonth: Dispatch<SetStateAction<String>>;
}

const ListBoxCom = ({ reportMonth, setReportMonth }: any) => {
  return (
    <main
      style={{
        zIndex: 999,
      }}
      className="w-full h-full absolute top-0 left-0"
    >
      <Listbox value={reportMonth} onChange={(e) => setReportMonth(e)}>
        <Listbox.Button
          className={
            'w-full h-full text-btnText flex  border px-3 rounded-full center'
          }
        >
          <span className="flex-1">{reportMonth || 'Month'}</span>
          <span>
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          enter="transition duration-150 ease-in"
          enterFrom="opactiy-0 translate-y-5"
          enterTo="opactiy-100 translate-y-0"
          leave="transition duration-150 ease-out"
          leaveFrom="opactiy-100 translate-y-5"
          leaveTo="opacity-0 translate-y-0"
        >
          <Listbox.Options
            className={
              'w-fit max-h-[240px] overflow-y-scroll bg-white drop-shadow-xl text-small'
            }
          >
            {monthNames.map((month, idx) => (
              <Listbox.Option
                key={`${month}_${idx}`}
                value={month}
                className={'cursor-pointer px-2 py-1 border-b mb-1'}
              >
                {month}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </main>
  );
};

// export default function Example() {
//   const [selected, setSelected] = useState(people[0])

//   return (
//     <div className="fixed top-16 w-72">
//       <Listbox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//           <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//             <span className="block truncate">{selected.name}</span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <ChevronUpDownIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
//               {people.map((person, personIdx) => (
//                 <Listbox.Option
//                   key={personIdx}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                       active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
//                     }`
//                   }
//                   value={person}
//                 >
//                   {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? 'font-medium' : 'font-normal'
//                         }`}
//                       >
//                         {person.name}
//                       </span>
//                       {selected ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   )
// }

export default ListBoxCom;
