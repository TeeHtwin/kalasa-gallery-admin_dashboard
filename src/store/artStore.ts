import { create } from 'zustand';
import { TextSearchFun } from '@/utils';
import { handleArtworkSort } from '@/utils';
import { DateFilter } from '@/utils/macellanous';
import { CONSTANT } from '@/constants/constant';

enum IartworkMedium {
  PAINTING = 'painting',
  DIGITAL = 'digital art',
  CEREMICS = 'ceremice',
}

interface IArtworkDTO {
  artwork_name: string;
  artist_name: string;
  medium: string; // this should be the enum type(IartworkMedium) // change it later
  upload_date: string;
  artwork_status: boolean;
}

interface DTO {
  artworks: any[];
  allArtworks: any[];
  loading: boolean;
  searchKeyword: string;
  page_number: number;
  total_page_size: number;
  handleDateFilterData: (start: string[], end: string[]) => void;
  setPageSize: (dataTotalLength: number) => void;
  handleSort: () => void;
  handlePagi: (page_number: number) => void;
  setSearchKeyWord: (keyword: string) => void;
  setAllWork: (artwork: any) => void; // this should be the defined type
  deleteArtwork: (id: string) => void;
}

const SlicingData = (data: any[], page_number: number) => {
  return data?.slice(
    (page_number - 1) * CONSTANT.PAGE_SIZE,
    page_number * CONSTANT.PAGE_SIZE,
  );
};

const sortingData = (data: any[]) => handleArtworkSort(data);

export const useArtWorkStore = create<DTO>((set, get) => ({
  artworks: [],
  allArtworks: [],
  page_number: 1,
  total_page_size: 1,
  loading: true,
  searchKeyword: '',
  setPageSize: (dataTotalLength: number) =>
    set({
      total_page_size: Math.ceil(dataTotalLength / CONSTANT.PAGE_SIZE),
    }),
  handleSort: () =>
    set({
      artworks: SlicingData(sortingData(get().artworks), get().page_number),
    }),
  handlePagi: (page_number: number) =>
    set({
      page_number,
      artworks: SlicingData(get().allArtworks, page_number),
    }),
  handleDateFilterData: (start: string[], end: string[]) =>
    set({ artworks: DateFilter(start, end, get().allArtworks) }),
  setSearchKeyWord: (searchKeyword: string) =>
    set({
      searchKeyword,
      artworks: SlicingData(
        TextSearchFun(get().allArtworks, searchKeyword),
        get().page_number,
      ),
    }),
  setAllWork: (artworks) =>
    set({
      loading: false,
      artworks: SlicingData(artworks, get().page_number),
      allArtworks: artworks,
    }),
  deleteArtwork: (id: string) =>
    set({
      artworks: get().allArtworks.filter(
        (artId) => artId.artwork_name.toLocaleLowerCase() !== id.toLowerCase(),
      ),
    }),
}));
