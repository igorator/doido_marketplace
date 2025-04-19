import type { Route } from './+types';
import { Outlet } from 'react-router';
import {
  FilterBar,
  FilterRow,
} from '~/shared/components/wrappers/FilterWrapper';
import { Navbar } from '~/shared/components/Navbar';
import { FilterComboDrawer } from '~/shared/components/filter/FilterComboDrawer';
import { giftsNavigationConfig } from '~/shared/config/navigation/navigationConfig';
import type { GiftCollection } from '~/shared/types/gifts/GiftCollection';
import type { GiftModel } from '~/shared/types/gifts/GiftModel';
import type { GiftBackdrop } from '~/shared/types/gifts/GiftBackdrop';
import type { GiftPattern } from '~/shared/types/gifts/GiftPattern';
import {
  getGiftCollections,
  getGiftBackdropByCollectionName,
  getGiftModelsByCollectionName,
  getGiftPatternsByCollectionName,
} from '~/api/gifts';
import { FilterSelect } from '~/shared/components/filter/FilterSelect';
import { ClearFilterButton } from '~/shared/components/filter/ClearFilterButton';
import { FilterRangeInput } from '~/shared/components/filter/FilterRangeInput';
import { FilterInput } from '~/shared/components/filter/FilterInput';

type GiftsLoaderData = {
  collections: GiftCollection[];
  models: GiftModel[];
  backdrops: GiftBackdrop[];
  patterns: GiftPattern[];
};

export async function clientLoader({
  request,
}: Route.ClientLoaderArgs): Promise<GiftsLoaderData> {
  const url = new URL(request.url);
  const collectionParams = url.searchParams.getAll('collection');

  const collections = await getGiftCollections();
  const models = await getGiftModelsByCollectionName(collectionParams);
  const backdrops = await getGiftBackdropByCollectionName(collectionParams);
  const patterns = await getGiftPatternsByCollectionName(collectionParams);

  return { collections, models, backdrops, patterns };
}

export default function GiftsLayout({ loaderData }: Route.ComponentProps) {
  const { collections, models, backdrops, patterns } = loaderData ?? {
    collections: [],
    models: [],
    backdrops: [],
    patterns: [],
  };

  return (
    <>
      <FilterBar>
        <FilterRow>
          <FilterComboDrawer
            placeholderCategory='Collection'
            placeholderSelected='All'
            options={collections}
            paramKey='collection'
          />
          <FilterComboDrawer
            placeholderCategory='Model'
            placeholderSelected='All'
            options={models}
            paramKey='model'
          />
          <FilterSelect />
          <ClearFilterButton />
        </FilterRow>

        <FilterRow>
          <FilterComboDrawer
            placeholderCategory='Backdrop'
            placeholderSelected='All'
            options={backdrops}
            paramKey='backdrop'
          />
          <FilterComboDrawer
            placeholderCategory='Pattern'
            placeholderSelected='All'
            options={patterns}
            paramKey='patterns'
          />
          <FilterRangeInput label={'Price'} paramKey={'price'} />
          <FilterInput label={'Gift id'} paramKey={'gift-id'} />
        </FilterRow>
      </FilterBar>

      <Outlet />
      <Navbar menuConfig={giftsNavigationConfig} />
    </>
  );
}
