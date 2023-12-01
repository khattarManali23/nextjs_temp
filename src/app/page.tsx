
import * as React from 'react';

import PopupBanner from '@/section/banner/PopupBanner';
import AppNavbar from '@/section/header/AppNavbar';
import { getBanners } from '@/services/bannerServices';


export default async function HomePage() {

  const data = await getBanners({ slug: 'POPUP_BANNER' });


  return (
    <>
      <AppNavbar />
      <PopupBanner data={data} />
    </>
  );
}


