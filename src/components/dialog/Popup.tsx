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
} from '@/components/ui/alert-dialog';

type PopUpText = {
  trigger: string;
  // title: string;
  // description: string;
};
// { trigger, title, description }: PopUpText

const Popup = ({ trigger }: PopUpText) => {
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
          ></AlertDialogTitle>
        </AlertDialogHeader>

        <div
          className="mt-4"
          style={{
            fontFamily: 'Arial',
          }}
        >
          <AlertDialogCancel className="rounded-xl w-32 ring-orange-800 ring-2 text-orange-800  h-14 text-lg font-bold hover:text-orange-900 hover:bg-transparent hover:ring-orange-900 ">
            Go Back
          </AlertDialogCancel>
          {/* <AlertDialogAction className="rounded-xl h-14 w-32 bg-orange-800 mx-10 text-lg font-bold text-white hover:bg-orange-900">
            confrim
          </AlertDialogAction> */}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Popup;
