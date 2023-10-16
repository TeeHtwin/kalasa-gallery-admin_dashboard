import React from 'react';
import ToggleButton from '../common/ToggleButton';

const TableCom = () => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="text-center text-btnText font-ariel bg-primary text-white font-light">
          <td className="pl-2 py-1.5">No</td>
          <td>Artwork Name</td>
          <td>Artist's Name</td>
          <td>Medium</td>
          <td>Upload Date</td>
          <td>Artwork Status</td>
          <td> </td>
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: 10 }).map((_, idx) => (
          <tr key={idx} className="text-center text-medium border-b">
            <td className="py-3">{idx + 1}</td>
            <td>K-337-36-x-48</td>
            <td>Kaung Min Khant</td>
            <td>Painting</td>
            <td>22.12.2002</td>
            <td className="h-[60px] center">
              <ToggleButton
                checked={idx % 2 === 0 ? true : false}
                toggleNum={`toggle-${idx}`}
              />
            </td>
            <td className="px-2">
              <span className="text-primary underline underline-offset-2">
                view
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCom;
