export const TextSearchFun = (array: any, searchText: string = '') => {
  if (searchText === '') {
    return array;
  } else {
    const data = array.filter((d: any) =>
      d.artist_name.toLowerCase().includes(searchText.toLowerCase() || ''),
    );
    return data;
  }
};

export const DateFilter = (start: string[], end: string[], data: any) => {
  const start_date = new Date(
    parseInt(start[2]),
    parseInt(start[1]) - 1,
    parseInt(start[0]),
  );
  const end_date = new Date(
    parseInt(end[2]),
    parseInt(end[1]) - 1,
    parseInt(end[0]),
  );
  const dateData = data
    .filter((d: any) => {
      const uploadDate = d?.upload_date.split('/');
      const artworkUploadDate = new Date(
        parseInt(uploadDate[2]),
        parseInt(uploadDate[1]) - 1,
        parseInt(uploadDate[0]),
      );
      if (artworkUploadDate >= start_date && artworkUploadDate <= end_date) {
        return d;
      }
    })
    .map((d: any) => d);

  return dateData;
};

export const customerSearchFun = (array: any, searchText: string = '') => {
  if (searchText === '') {
    return array;
  } else {
    const data = array.filter((d: any) =>
      d.customer_name.toLowerCase().includes(searchText || ''),
    );
    return data;
  }
};
