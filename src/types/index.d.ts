interface ITableData {
  No: number;
  artwork_name: string;
  artist_name: string;
  medium: string;
  upload_date: string;
  artwork_status: boolean;
}

interface IArtistTable {
  no: number;
  artist_name: string;
  added_date: string;
  total_artworks: number;
  sold_artworks: number;
}

interface ICTAButton {
  icon?: string;
  title: string;
  fun?: () => void;
}

interface IPagiBtn extends ICTAButton {
  containerStyle?: string | undefined;
}
