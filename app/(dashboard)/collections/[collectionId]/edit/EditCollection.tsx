'use client';

import CtaBtn from '@/components/ui/CtaBtn';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

type EditCollectionProps = {
  token: string;
};

export default function EditCollection({ token }: EditCollectionProps) {
  const router = useRouter();
  const form = useForm();
  const [loading, setLoading] = useState(false);
  return (
    <Form {...form}>
      <form className="space-y-8 mt-4">
        <div className="flex justify-between items-center text-primary h-6">
          <h2 className="text-xl font-medium">Edit Collection</h2>
          <CtaBtn disabled={loading}>
            {loading ? <LoadingSpinner /> : 'Submit'}
          </CtaBtn>
        </div>
      </form>
    </Form>
  );
}
