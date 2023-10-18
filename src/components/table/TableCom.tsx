import React from 'react';
import ToggleButton from '../common/ToggleButton';
import Link from 'next/link';

const TableCom = ({
  path,
  tableHeader,
  data,
}: {
  path: string;
  tableHeader: string[];
  data: ITableData[] | IArtistTable[];
}) => {
  const headerTag = tableHeader.map((h, idx) => (
    <td key={`${h}_${idx}`} className="min-w-[60px] py-1.5">
      {h.replace('_', ' ')}
    </td>
  ));

  const bodyTag = data.map((d: any, idx: number) => {
    const keys = Object.keys(d);
    return (
      <tr key={idx} className="text-center capitalize text-medium border-b">
        {keys.map((k: string, i) =>
          k === 'artwork_status' ? (
            <td key={`${k}_${i}`} className="h-[60px] center">
              <ToggleButton checked={d[k]} toggleNum={`toggle-${idx}`} />
            </td>
          ) : (
            <td key={`${k}_${i}`} className="py-3.5">
              {d[k]}
            </td>
          ),
        )}
        <td className="px-2">
          <Link href={`${path}${path}info/${idx}`}>
            <span className="text-primary underline underline-offset-2">
              view
            </span>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <table className="w-full border">
      <thead>
        <tr className="text-center text-btnText capitalize font-ariel bg-primary text-white font-light">
          {headerTag}
        </tr>
      </thead>

      <tbody>{bodyTag}</tbody>
    </table>
  );
};

export default TableCom;
