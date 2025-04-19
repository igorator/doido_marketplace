import { useSearchParams } from 'react-router';
import { Input } from '../ui/input';

export const FilterInput = ({
  label,
  paramKey,
}: {
  label: string;
  paramKey: string;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(paramKey) || '';

  const handleChange = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) {
      nextParams.set(paramKey, value);
    } else {
      nextParams.delete(paramKey);
    }
    setSearchParams(nextParams);
  };

  return (
    <div className='flex flex-col gap-[2px] p-2 rounded-[var(--theme-inner-border-radius)] bg-[var(--theme-accent-bg)] grow'>
      <span className='w-full font-medium text-sm text-center capitalize leading-tight'>
        {label}:
      </span>
      <Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder='#'
        className='bg-[var(--theme-secondary-bg-color)] px-2 rounded-[var(--theme-inner-border-radius)] border-none h-7 text-xs'
      />
    </div>
  );
};
