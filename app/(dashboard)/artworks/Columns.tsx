import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';
import Artist from './Artwork';

export const ArtworkColumnRef: ColumnDef<any>[] = [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: `Artwork Name`,
    accessorKey: 'name',
  },
  {
    header: "Artist's Name",
    accessorKey: 'artist.name',
  },
  {
    header: 'Medium',
    accessorKey: 'category_id',
  },
  {
    header: 'Upload Date',
    accessorKey: 'updated_at',
  },
  {
    header: 'Artwork Status',
    accessorKey: 'status',
  },
  {
    header: '',
    accessorKey: 'id',
    id: 'action',
    cell: ({ getValue }) => {
      const rowId = getValue() as number;
      return (
        <Link className="text-primary underline" href={`/artworks/${rowId}`}>
          View
        </Link>
      );
    },
  },
];
