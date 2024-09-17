import React, { useState, useCallback, useEffect } from 'react';
import { Switch } from '../ui/switch';
import { put } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import toast from 'react-hot-toast';

type Props = {
  id: number;
  token?: string;
  initialStatus: boolean;
};

const SwitchForm = React.memo(({ id, token, initialStatus }: Props) => {
  const [isSold, setIsSold] = useState(initialStatus);

  useEffect(() => {
    setIsSold(initialStatus);
  }, [initialStatus]);

  const handleChange = useCallback(async () => {
    const newStatus = !isSold;
    setIsSold(newStatus);

    try {
      await put(
        `${API.artwork}/sold_artwork/${id}`,
        {
          Authorization: `Bearer ${token}`,
        },
        JSON.stringify({ sold: newStatus }),
      );
      toast.success('Successfully update artwork status');
    } catch (error) {
      toast.error('Error updating artwork status:');
      setIsSold(!newStatus); // Revert the state if the API call fails
    }
  }, [isSold, id, token]);

  return <Switch onCheckedChange={handleChange} checked={isSold} />;
});

SwitchForm.displayName = 'SwitchForm';

export default SwitchForm;
