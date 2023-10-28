import { format } from 'date-fns';

export const FormatDate = (date: any, formatStyle?: string) => {
  if (date === null) return null;
  const data = format(new Date(date), formatStyle || 'dd/MM/yyyy');
  return data;
};
