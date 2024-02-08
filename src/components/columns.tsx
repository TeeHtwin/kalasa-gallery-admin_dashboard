'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Artist = {
  id: number;
  name: string;
  description: string;
  total_artwork: number;
  sold_artwork: number;
  added_date: string;
};

export const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: 'id',
    header: 'No',
  },
  {
    accessorKey: 'name',
    header: "Artist's Name",
  },
  {
    accessorKey: 'added_date',
    header: 'Added Date',
  },
  {
    accessorKey: 'total_artwork',
    header: 'Total Artworks',
  },
  {
    accessorKey: 'sold_artwork',
    header: 'Sold Artworks',
  },
  {
    accessorKey: 'page',
    header: 'Page',
  },
];
