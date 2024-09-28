import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import SwitchForm from '@/components/common/SwitchForm';

export const ArtworkColumnRef = (token: string): ColumnDef<any>[] => [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: 'Artwork Name',
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
    cell: ({ getValue }) => new Date(getValue() as string).toDateString(),
  },
  {
    header: 'Artwork Status',
    accessorKey: 'is_sold',
    id: 'action',
    cell: ({ row }) => (
      <SwitchForm
        id={row.original.id}
        token={token}
        initialStatus={row.original.sold}
      />
    ),
  },
  {
    header: '',
    accessorKey: 'id',
    id: 'view',
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
