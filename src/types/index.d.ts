interface ITableData {
  artwork_name: string;
  artist_name: string;
  medium: string;
  upload_date: string;
  artwork_status: boolean;
}

interface IArtistTable {
  artist_name: string;
  added_date: string;
  total_artworks: number;
  sold_artworks: number;
}
interface IPageheaderSN {
  link: string;
  headerLabel: string;
  btnLabel: string;
  deleteLabel?: string;
  icon?: any;
  handleModalBox: () => void;
}

interface IContactTable {
  customer_name: string;
  subject: string;
  email: string;
  phone_number: string;
}

interface ICTAButton {
  icon?: string;
  title: string;
  fun?: () => void;
}

interface IPagiBtn extends ICTAButton {
  containerStyle?: string | undefined;
}
