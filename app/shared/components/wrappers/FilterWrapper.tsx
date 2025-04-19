import { useState } from 'react';
import { Button } from '~/shared/components/ui/button';
import { cn } from '~/shared/lib/utils/utils';

export const FilterBar = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='flex flex-col'>
      <div
        className={cn(
          'flex flex-col items-center gap-2 bg-[var(--theme-secondary-bg-color)] p-2 rounded-[var(--theme-outer-border-radius)] w-full transition-all overflow-hidden',
          expanded ? 'max-h-fit' : 'max-h-[57px]',
        )}
      >
        {children}
      </div>
      <Button
        className='self-center bg-[var(--theme-secondary-bg-color)] rounded-t-none w-fit text-sm hover:underline text-[var(--theme-accent-text)]'
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? 'Hide filters' : 'Show filters'}
      </Button>
    </div>
  );
};

export const FilterRow = ({ children }: { children: React.ReactNode }) => (
  <div className='flex justify-between items-stretch gap-[var(--theme-inner-gap)] w-full h-full'>
    {children}
  </div>
);
