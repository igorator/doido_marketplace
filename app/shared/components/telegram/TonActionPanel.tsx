import { LucideMinus, LucidePlus } from 'lucide-react';
import { useState } from 'react';
import { TonIcon } from '~/shared/assets/icons/TonIcon';
import { Button } from '../ui/button';

export function TonActionPanel() {
  const [balance, setBalance] = useState(200);

  return (
    <div className='flex justify-between items-stretch gap-1 bg-[var(--theme-secondary-bg-color)] p-3 pl-4 rounded-[var(--theme-outer-border-radius)] w-full max-w-[150px]'>
      <div className='flex justify-center items-center'>
        <span className='font-semibold'>{balance}</span>
        <TonIcon />
      </div>

      <div className='flex justify-center items-center'>
        <Button
          onClick={() => setBalance(balance + 1)}
          className='flex justify-center items-center bg-[var(--theme-ton-color)] rounded-none rounded-l-[var(--theme-inner-border-radius)]'
        >
          <LucidePlus className='size-[16px]' />
        </Button>

        <div className='opacity-30 border-white border-l-[1px] h-full'></div>

        <Button
          onClick={() => setBalance(balance - 1)}
          className='flex justify-center items-center bg-[var(--theme-ton-color)] rounded-none rounded-r-[var(--theme-inner-border-radius)]'
        >
          <LucideMinus className='size-[16px]' />
        </Button>
      </div>
    </div>
  );
}
