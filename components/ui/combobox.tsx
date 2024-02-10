'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type ArtistsProps = {
  name: string;
  id: string;
};

export function Combobox({
  Artists,
  setVal,
  val,
  open,
  setOpen,
}: {
  Artists: ArtistsProps[];
  setVal: () => void;
  val: string;
  open: boolean;
  setOpen: () => void;
}) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px]  justify-between"
        >
          {val
            ? Artists.find((item) => item.id == val)?.name
            : 'Select Artist...'}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Artist..." className="h-9" />
          <CommandEmpty>No artist found.</CommandEmpty>
          <CommandGroup>
            {Artists?.length >= 1 &&
              Artists?.map((artist) => (
                <CommandItem
                  key={artist.id}
                  value={artist.id}
                  onSelect={() => {
                    setVal(artist.id);
                    setOpen(false);
                  }}
                >
                  {artist.name}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      val === artist.id ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
