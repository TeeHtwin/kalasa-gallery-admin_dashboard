import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';
import Artist from './Artist';

export const ArtistColumnRef: ColumnDef<any>[] = [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: 'Image',
    accessorKey: 'profile_image',
    cell: ({ getValue }) => {
      const image = getValue() as string;
      return (
        <Image
          src={image ?? ''}
          width={50}
          className="aspect-square rounded-md object-cover"
          alt="profile_img "
          height={50}
        />
      );
    },
  },
  {
    header: `Artist's Name`,
    accessorKey: 'name',
  },
  {
    header: 'Added Date',
    accessorKey: 'added_date',
  },
  {
    header: 'Total Artworks',
    accessorKey: 'total_artwork',
  },
  {
    header: 'Sold Artworks',
    accessorKey: 'sold_artwork',
  },
  {
    header: '',
    accessorKey: 'id',
    id: 'action',
    cell: ({ getValue }) => {
      const rowId = getValue() as number;
      return (
        <Link className="text-primary underline" href={`/artists/${rowId}`}>
          View
        </Link>
      );
    },
  },
];
