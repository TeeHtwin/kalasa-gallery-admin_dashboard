import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export const BlogColumnRef: ColumnDef<Blog>[] = [
  {
    header: 'No',
    accessorKey: 'id',
  },
  {
    header: 'Image',
    accessorKey: 'image',
    cell: ({ getValue }) => {
      const image = getValue() as string;
      return <Image src={image ?? ''} width={50} height={50} alt="blog_img" />;
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
