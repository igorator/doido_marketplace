import { useSearchParams } from 'react-router';
import { Input } from '../ui/input';

export const FilterRangeInput = ({
  label,
  paramKey,
}: {
  label: string;
  paramKey: string;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fromKey = `${paramKey}_from`;
  const toKey = `${paramKey}_to`;

  const from = searchParams.get(fromKey) || '';
  const to = searchParams.get(toKey) || '';

  const handleChange = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    setSearchParams(nextParams);
  };

  return (
    <div className='flex flex-col gap-[2px] p-2 rounded-[var(--theme-inner-border-radius)] w-full max-w-[190px] bg-[var(--theme-accent-bg)]'>
      <span className='font-medium text-sm capitalize leading-tight'>
        {label}:
      </span>
      <div className='flex justify-between items-start gap-1 w-full text-xs'>
        <Input
          type='number'
          value={from}
          onChange={(e) => handleChange(fromKey, e.target.value)}
          inputMode='numeric'
          placeholder='From...'
          className='bg-[var(--theme-secondary-bg-color)] px-2 rounded-[var(--theme-inner-border-radius)] border-none h-7 text-xs'
        />

        <Input
          type='number'
          value={to}
          onChange={(e) => handleChange(toKey, e.target.value)}
          inputMode='numeric'
          placeholder='To...'
          className='bg-[var(--theme-secondary-bg-color)] px-2 rounded-[var(--theme-inner-border-radius)] border-none h-7 text-xs'
        />
      </div>
    </div>
  );
};
