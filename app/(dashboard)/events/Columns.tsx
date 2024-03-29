import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';

export const EventColumnRef: ColumnDef<Exhibition>[] = [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: 'Image',
    accessorKey: 'image',
    cell: ({ getValue }) => {
      const image = getValue() as string;
      return (
        <Image src={image ?? ''} width={50} alt="event_img" height={50} />
      );
    },
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Location',
    accessorKey: 'location',
  },
  {
    header: '',
    accessorKey: 'id',
    id: 'action',
    cell: ({ getValue }) => {
      const rowId = getValue() as number;
      return <Link href={`/events/${rowId}`}>View</Link>;
    },
  },
];
