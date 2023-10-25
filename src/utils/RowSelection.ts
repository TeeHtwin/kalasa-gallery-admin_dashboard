export const handleSelectedRow = (idx: string, selectedData: string[]) => {
  // check the idx is already selected or not;
  if (selectedData.includes(idx)) {
    const data = selectedData.filter((d) => d !== idx);
    return data;
  }
  return [...selectedData, idx];
};
