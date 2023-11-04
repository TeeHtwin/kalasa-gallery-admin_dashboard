'use client';
import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import ToggleButton from '../common/ToggleButton';
import ImageIconCom from '../common/ImageIconCom';
import chevronDown from '@/assets/icons/chevrondown.svg';
import deleteIcon from '@/assets/icons/trash.svg';
import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableCom = ({
  path,
  tableHeader,
  data,
  quickAction,
  selectedRowCount,
  handleMultipleDeleteAction,
  emptySelectionRow,
  handleSort,
  setQuickAction,
  handleMultipleDelete,
}: {
  path: string;
  data: ITableData[] | IArtistTable[] | IContactTable[];
  tableHeader: string[];
  quickAction: boolean;
  selectedRowCount: any[];
  handleMultipleDeleteAction: () => void;
  emptySelectionRow: () => void;
  handleSort: () => void;
  setQuickAction: Dispatch<SetStateAction<boolean>>;
  handleMultipleDelete: Dispatch<any>;
}) => {
  const headerTag = tableHeader.map((h, idx) =>
    quickAction && h === 'action' ? (
      <Th key={`${h}_${idx}`} className="min-w-[25px] max-w-[40px] py-1.5">
        {h.replace('action', ' ')}
      </Th>
    ) : (
      h !== 'action' && (
        <Th key={`${h}_${idx}`} className="min-w-[60px] py-1.5">
          {h.replace('_', ' ')}
        </Th>
      )
    ),
  );

  const bodyTag = data.map((d: any, idx: number) => {
    const keys = Object.keys(d);
    return (
      <Tr key={idx} className={`text-center capitalize text-medium border-b`}>
        {quickAction && (
          <Td className="center">
            <input
              type="checkbox"
              checked={selectedRowCount.includes(d.artwork_name)}
              className="accent-primary border cursor-pointer"
              onChange={() => handleMultipleDelete(d.artwork_name)}
            />
          </Td>
        )}

        <Td className='py-4'>{idx + 1}</Td>

        {keys.map((k: string, i) =>
          k === 'artwork_status' ? (
            <Td key={`${k}_${i}`} className="center py-3">
              <ToggleButton checked={d[k]} toggleNum={`toggle-${idx}`} />
            </Td>
          ) : (
            <Td
              key={`${k}_${i}`}
              className={` ${
                k === 'subject' || k === 'email' ? 'lowercase' : 'capitalize'
              }`}
            >
              {d[k]}
            </Td>
          ),
        )}
        <Td className="px-2">
          <Link href={`${path}${path}info/${idx}`}>
            <span className="text-primary underline underline-offset-2">
              view
            </span>
          </Link>
        </Td>
      </Tr>
    );
  });

  return (
    <>
      <div className="flex justify-between items-center text-primary py-2 text-btnText">
        <div>
          {quickAction ? (
            <div className="flex gap-2 bg-red text-white py-1 rounded-full px-4 relative">
              <button
                className="center gap-2"
                onClick={handleMultipleDeleteAction}
              >
                <span className="w-5 text-small font-bold h-5 inline-block bg-white text-red rounded-full">
                  {selectedRowCount.length}
                </span>{' '}
                Multiple delete{' '}
                <ImageIconCom src={deleteIcon} width={30} height={30} />
              </button>
              <button
                className="w-5 h-5 text-small rounded-full absolute -top-1 -right-1 bg-black text-white"
                onClick={() => {
                  setQuickAction(!quickAction);
                  emptySelectionRow();
                }}
              >
                X
              </button>
            </div>
          ) : (
            <label htmlFor="checkbox" className="ml-2 cursor-pointer">
              <input
                type="checkbox"
                id="checkbox"
                className="apperance-none mr-1"
                onClick={() => setQuickAction(!quickAction)}
              />
              Quick Action
            </label>
          )}
        </div>
        <button
          onClick={() => handleSort()}
          className="block center gap-2 text-primary"
        >
          Sort By <ImageIconCom src={chevronDown} />
        </button>
      </div>
      <Table className="w-full border">
        <Thead>
          <Tr className="text-center text-btnText capitalize font-ariel bg-primary text-white font-light">
            {headerTag}
          </Tr>
        </Thead>

        <Tbody>{bodyTag}</Tbody>
      </Table>
    </>
  );
};

export default TableCom;
