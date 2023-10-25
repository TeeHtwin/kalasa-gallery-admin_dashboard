export const handleArtworkSort = (arr: any) => {
  // component should re-render
  const sortedData = arr
    .sort((a: any, b: any) =>
      a.artist_name.toLowerCase() !== b.artist_name.toLowerCase()
        ? b.artist_name < a.artist_name
          ? 1
          : -1
        : 0,
    )
    /**without map method, sorting working properly in here but it did not update the component
     * cause the state did not change( the array size did not chage)
     * so we remind that the state has changed.
     * */
    .map((i: any) => i);
  return sortedData;
};
