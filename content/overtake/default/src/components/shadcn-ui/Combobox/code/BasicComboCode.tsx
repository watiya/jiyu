import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';
import { cn } from 'src/lib/utils';
import { Button } from 'src/components/shadcn-ui/Default-Ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/shadcn-ui/Default-Ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/shadcn-ui/Default-Ui/popover';

const BasicComboboxCode = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const frameworks = [
    {
      value: 'next.js',
      label: 'Next.js',
    },
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'nuxt.js',
      label: 'Nuxt.js',
    },
    {
      value: 'remix',
      label: 'Remix',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 max-w-sm">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : 'Select framework...'}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" p-0 ">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          'ml-auto',
                          value === framework.value ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default BasicComboboxCode;
