import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/types/example';
import { httpService } from '.';

export const useGetUsers = () => {
  return useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await httpService.get('users');
      return res.data;
    },
  });
};
