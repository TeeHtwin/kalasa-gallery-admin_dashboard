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
    cell: ({ getValue, cell }) => {
      const rowId = getValue() as number;
      return (
        <Popup
          trigger="view"
          name="Hnin Cherry"
          gmail="yukisaku1023@gmail.com"
          description="Can you contact me back !!"
        ></Popup>
      );
    },
  },
];
