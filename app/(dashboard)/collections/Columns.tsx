import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';

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
    cell: ({ getValue }) => {
      const text = getValue() as string;
      return <div>{text ?? ''}</div>;
    },
  },
  {
    header: '',
    accessorKey: 'id',
    id: 'action',
    cell: ({ getValue }) => {
      const rowId = getValue() as number;
      return <Link href={`/collections/${rowId}`}>View</Link>;
    },
  },
];
