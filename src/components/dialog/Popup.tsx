'use client';
import React from 'react';
import { UserRound } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

type PopUpText = {
  trigger: string;
  name: string;
  gmail: string;
  phonenumber: string;
  description: string;
};
const Popup = ({
  trigger,
  name,
  gmail,
  phonenumber,
  description,
}: PopUpText) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent
          className="flex bg-white  p-8  h-64"
          style={{
            fontFamily: 'Arial',
          }}
        >
          <div>
            <UserRound
              className="bg-white shadow-md  shadow-orange-200 rounded-3xl w-14 h-14 p-4"
              color="brown"
            />
          </div>
          <div className="pl-2">
            <DialogHeader className="font-bold text-lg">{name}</DialogHeader>
            <DialogDescription className="text-gray-500 mt-2 text-md">
              {gmail}
            </DialogDescription>
            <DialogDescription className="text-gray-500 mt-2 text-md">
              {phonenumber}
            </DialogDescription>
            <Textarea
              className=" mt-2 w-80 resize-none rounded-xl text-sm h-24"
              disabled
            >
              {description}
            </Textarea>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popup;
