import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from 'src/lib/utils';
import { Button } from 'src/components/shadcn-ui/Default-Ui/button';
import { Calendar } from 'src/components/shadcn-ui/Default-Ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/shadcn-ui/Default-Ui/popover';
import React from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

const BasicDatepickerCode = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <>
      <div className=" flex flex-wrap items-center gap-3 max-w-sm">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default BasicDatepickerCode;
