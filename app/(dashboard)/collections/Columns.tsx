import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const CollectionColumnRef: ColumnDef<Collection>[] = [
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
        <Image src={image ?? ''} width={50} alt="collection_img" height={50} />
      );
    },
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
  },
  {
    header: '',
    accessorKey: '',
    id: 'action',
    cell: () => <button>View</button>,
  },
];