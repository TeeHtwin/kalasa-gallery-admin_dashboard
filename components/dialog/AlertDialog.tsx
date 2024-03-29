'use client';
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

type Alerttext = {
  trigger: string;
  title: string;
  description: string;
};

const Alert = ({ trigger, title, description }: Alerttext) => {
  const handleConfirm = () => {
    console.log('This is button');
  };
  const handleCancel = () => {
    console.log('this is cancel button');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>

      <AlertDialogContent className="p-10 bg-white  rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle
            className="text-orange-800 text-xl"
            style={{
              fontFamily: 'Cardo',
            }}
          >
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription
          className="text-gray-500 w-90 text-base"
          style={{
            fontFamily: 'Arial',
          }}
        >
          {description}
        </AlertDialogDescription>
        <div
          className="mt-4"
          style={{
            fontFamily: 'Arial',
          }}
        >
          <AlertDialogCancel
            className="rounded-xl w-32 ring-orange-800 ring-2 text-orange-800  h-14 text-lg font-bold hover:text-orange-900 hover:bg-transparent hover:ring-orange-900 "
            onClick={handleCancel}
          >
            Go Back
          </AlertDialogCancel>
          <AlertDialogAction
            className="rounded-xl h-14 w-32 bg-orange-800 mx-10 text-lg font-bold text-white hover:bg-orange-900"
            onClick={handleConfirm}
          >
            confrim
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
