import { AArrowUp, AArrowDown, CalendarArrowDown } from 'lucide-react';
import { useSearchParams } from 'react-router';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/shared/components/ui/select';

export const FilterSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get('sort') || '';

  const handleChange = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set('sort', value);
    } else {
      nextParams.delete('sort');
    }
    setSearchParams(nextParams);
  };

  return (
    <Select
      key={currentValue || 'empty'} // 🧠 заставляет Select сброситься
      value={currentValue || undefined}
      onValueChange={handleChange}
    >
      <SelectTrigger className='flex flex-wrap py-2 rounded-[var(--theme-inner-border-radius)] border-none w-full max-w-[190px] !h-15 bg-[var(--theme-accent-bg)]'>
        <SelectValue placeholder='Sort' />
      </SelectTrigger>
      <SelectContent className='bg-[var(--theme-secondary-bg-color)] rounded-[var(--theme-inner-border-radius)] border-none'>
        <SelectItem value='latest'>
          Latest <CalendarArrowDown />
        </SelectItem>
        <SelectItem value='price-asc' className='flex justify-between'>
          Price asc <AArrowUp className='ml-2' />
        </SelectItem>
        <SelectItem value='price-desc' className='flex justify-between'>
          Price desc <AArrowDown className='ml-2' />
        </SelectItem>
        <SelectItem value='id-asc' className='flex justify-between'>
          Gift ID asc <AArrowUp className='ml-2' />
        </SelectItem>
        <SelectItem value='id-desc' className='flex justify-between'>
          Gift ID desc <AArrowDown className='ml-2' />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
