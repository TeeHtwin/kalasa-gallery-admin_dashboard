import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import Image from 'next/image';

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
    cell: ({ getValue }) => {
      const rowId = getValue() as number;
      return <Link href={`/collections/${rowId}`}>View</Link>;
    },
  },
];
