export const TextSearchFun = (array: any, searchText: string = '') => {
  if (searchText === '') {
    return array;
  } else {
    const data = array.filter((d: any) =>
      d.artist_name.toLowerCase().includes(searchText || ''),
    );
    return data;
  }
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
