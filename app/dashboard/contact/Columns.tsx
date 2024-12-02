import { ColumnDef } from '@tanstack/react-table';
import Popup from '@/components/dialog/Popup';
import { get } from '@/utils/apiFetch';

export const ContactColumnRef: ColumnDef<Contact>[] = [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: 'Customer Name',
    accessorKey: 'name',
  },
  {
    header: 'Mail Account',
    accessorKey: 'email',
  },
  {
    header: 'Description',
    accessorKey: 'message',
  },
  {
    header: 'Action',
    accessorKey: 'id',
    id: 'action',
    cell: ({ getValue, cell, row }) => {
      const rowId = getValue() as number;
      return (
        <Popup
          trigger="view"
          name={row.getValue('name')}
          gmail={row.getValue('email')}
          description={row.getValue('message')}
        ></Popup>
      );
    },
  },
];
