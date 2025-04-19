import { Eraser } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { Button } from '~/shared/components/ui/button';

export const ClearFilterButton = ({ onClick }: { onClick?: () => void }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClear = () => {
    setSearchParams({});
    onClick?.();
  };

  return (
    <Button
      onClick={handleClear}
      className='flex flex-wrap justify-center items-center gap-1 p-2 hover:text-foreground text-sm text-[var(--theme-accent-text)] grow'
    >
      <Eraser className='size-3' />
      <span>Clear</span>
    </Button>
  );
};
