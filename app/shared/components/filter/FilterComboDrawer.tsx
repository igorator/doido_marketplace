import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/shared/components/ui/drawer';
import { Input } from '~/shared/components/ui/input';
import { Button } from '~/shared/components/ui/button';
import { ScrollArea } from '~/shared/components/ui/scroll-area';
import { cn, formatGiftsRarity } from '~/shared/lib/utils/utils';
import { LucideSearch, LucideCheckSquare, LucideSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import imagePlaceholder from '../../assets/images/image-placeholder.webp';
import type { GiftBackdrop } from '~/shared/types/gifts/GiftBackdrop';

type SelectableItem = {
  name: string;
  image?: string;
  rarity?: number;
  backdrop?: GiftBackdrop;
};

type Props<T extends SelectableItem> = {
  options: T[];
  paramKey: string;
  placeholderCategory?: string;
  placeholderSelected?: string;
};

export const FilterComboDrawer = <T extends SelectableItem>({
  options,
  paramKey,
  placeholderCategory = 'Select category',
  placeholderSelected = 'Selected items will appear here...',
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<T[]>([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const selectedFromURL = new Set(searchParams.getAll(paramKey));
    const preselected = options.filter((option) =>
      selectedFromURL.has(option.name),
    );
    setSelected(preselected);
  }, [options, searchParams, paramKey]);

  const updateSearchParams = (newSelected: T[]) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete(paramKey);
    newSelected.forEach((item) => nextParams.append(paramKey, item.name));
    setSearchParams(nextParams);
  };

  const handleSelect = (option: T) => {
    const exists = selected.some((item) => item.name === option.name);
    const updated = exists
      ? selected.filter((item) => item.name !== option.name)
      : [...selected, option];

    setSelected(updated);
    updateSearchParams(updated);
  };

  const handleChooseAll = () => {
    const allSelected = filteredOptions.length === selected.length;
    const updated = allSelected ? [] : filteredOptions;
    setSelected(updated);
    updateSearchParams(updated);
  };

  const clearSelection = () => {
    setSelected([]);
    setSearch('');
    setOpen(false);
    updateSearchParams([]);
  };

  const isChooseAllChecked =
    filteredOptions.length > 0 && filteredOptions.length === selected.length;

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='flex justify-between items-center p-2 rounded-[var(--theme-inner-border-radius)] w-full max-w-[90px] bg-[var(--theme-accent-bg)]'>
          <div className='flex flex-col items-start gap-1 w-full'>
            <div className='font-semibold'>{placeholderCategory}</div>
            <div className='opacity-70 w-full max-w-[80%] overflow-hidden text-start truncate'>
              {selected.length === 0
                ? placeholderSelected
                : selected.length === 1
                ? selected[0].name
                : `${selected.length} selected`}
            </div>
          </div>
          {selected.length === 0 && <LucideSearch />}
        </Button>
      </DrawerTrigger>

      <DrawerContent className='flex flex-col justify-start bg-[var(--theme-secondary-bg-color)] shadow-lg p-6 border-none rounded-none h-full'>
        <DrawerHeader className='relative'>
          <DrawerTitle className='font-semibold text-[var(--theme-text)] text-xl text-center'>
            {placeholderCategory}
          </DrawerTitle>
          <DrawerDescription className='sr-only' />
        </DrawerHeader>

        <Button
          variant='ghost'
          className='top-6 right-2 absolute text-[14px] text-[var(--theme-accent-text)]'
          onClick={clearSelection}
        >
          Clear
        </Button>

        <Button
          className='top-7 left-6 absolute flex justify-center items-center gap-2'
          onClick={handleChooseAll}
        >
          {isChooseAllChecked ? (
            <LucideCheckSquare className='text-[var(--theme-accent-text)]' />
          ) : (
            <LucideSquare className='text-[var(--theme-accent-text)]' />
          )}
          <span>All</span>
        </Button>

        <RarityCheckboxGroup
          options={options}
          selected={selected}
          setSelected={setSelected}
          updateSearchParams={updateSearchParams}
          filteredOptions={filteredOptions}
        />

        <div className='relative flex items-center gap-3 bg-[var(--theme-input-bg)] pl-3 rounded-t-[var(--theme-outer-border-radius)] overflow-clip'>
          <LucideSearch className='shadow-none text-[var(--theme-accent-bg)]' />
          <Input
            placeholder={`Search ${placeholderCategory}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='p-3 py-6 pl-0 border-none rounded-none focus:outline-none focus-visible:ring-0 focus:ring-0 text-[var(--theme-input-text)]'
          />
        </div>

        <ScrollArea
          className='bg-[var(--theme-secondary-bg)] mb-[-17px] rounded-none overflow-scroll overflow-x-hidden'
          style={{ scrollbarWidth: 'none' }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <FilterDrawerItem
                key={option.name}
                label={option.name}
                image={option.image || imagePlaceholder}
                rarity={option.rarity}
                backdrop={option.backdrop}
                isSelected={selected.some((s) => s.name === option.name)}
                onClick={() => handleSelect(option)}
              />
            ))
          ) : (
            <div className='py-6 text-muted-foreground text-sm text-center'>
              No options found
            </div>
          )}
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

const FilterDrawerItem = ({
  label,
  image,
  rarity,
  backdrop,
  isSelected,
  onClick,
}: {
  label: string;
  image?: string;
  rarity?: number;
  backdrop?: GiftBackdrop;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      className={cn(
        'justify-start !px-6 py-4 w-full text-lg transition-colors duration-200 ease-in-out rounded-none h-auto flex items-center gap-6',
        isSelected &&
          'bg-[var(--theme-accent-bg)] text-[var(--theme-accent-text)]',
      )}
      onClick={onClick}
    >
      {isSelected ? (
        <LucideCheckSquare className='size-8 text-[var(--theme-accent-text)]' />
      ) : (
        <LucideSquare className='size-8 text-[var(--theme-accent-text)]' />
      )}

      {backdrop?.hex?.centerColor && backdrop?.hex?.edgeColor ? (
        <div
          className='rounded-full size-10 shrink-0'
          style={{
            background: `radial-gradient(circle, ${backdrop.hex.centerColor} 30%, ${backdrop.hex.edgeColor} 100%)`,
          }}
        />
      ) : image ? (
        <img
          src={image}
          alt={label}
          width={40}
          height={40}
          className='rounded-full object-cover'
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== imagePlaceholder) {
              target.src = imagePlaceholder;
            }
          }}
        />
      ) : null}

      <div className='w-full max-w-[100px] text-start'>{label}</div>

      {rarity !== undefined && (
        <div className='bg-accent p-1 rounded-[var(--theme-true-rounded)] w-full max-w-[50px] text-foreground text-sm text-center'>
          {formatGiftsRarity(rarity)}
        </div>
      )}
    </Button>
  );
};

const RarityCheckboxGroup = <T extends SelectableItem>({
  options,
  selected,
  setSelected,
  updateSearchParams,
  filteredOptions,
}: {
  options: T[];
  selected: T[];
  setSelected: (s: T[]) => void;
  updateSearchParams: (s: T[]) => void;
  filteredOptions: T[];
}) => {
  const uniqueRarities = Array.from(
    new Set(
      options.map((o) => o.rarity).filter((r): r is number => r !== undefined),
    ),
  );

  if (uniqueRarities.length === 0) return null;

  return (
    <div className='flex flex-wrap justify-center items-center gap-3 py-4'>
      {uniqueRarities.map((rarity) => {
        const optionsWithRarity = filteredOptions.filter(
          (o) => o.rarity === rarity,
        );
        const isSelected = optionsWithRarity.every((opt) =>
          selected.some((s) => s.name === opt.name),
        );

        const toggleRarity = () => {
          const updated = isSelected
            ? selected.filter((s) => s.rarity !== rarity)
            : [
                ...selected.filter((s) => s.rarity !== rarity),
                ...optionsWithRarity.filter(
                  (o) => !selected.some((s) => s.name === o.name),
                ),
              ];
          setSelected(updated);
          updateSearchParams(updated);
        };

        return (
          <Button
            key={rarity}
            onClick={toggleRarity}
            className={cn(
              'px-3 py-2 text-sm rounded-md flex items-center gap-2 bg-[var(--theme-accent-bg)] grow w-full max-w-[60px] ',
              isSelected && 'bg-[var(--theme-accent-bg)] text-white',
            )}
          >
            {isSelected ? (
              <LucideCheckSquare className='size-4 text-[var(--theme-accent-text)]' />
            ) : (
              <LucideSquare className='size-4 text-[var(--theme-accent-text)]' />
            )}
            <span className='grow'>{formatGiftsRarity(rarity)}</span>
          </Button>
        );
      })}
    </div>
  );
};
