import { useEffect, useState } from 'react';
import { readUrls } from './utils/crudFunctions'
import { ShortenedURL } from './types/storeLink';

import { HeadBanner } from './components/bigBanner'
import MainLayout from './components/layout/MainLayout';
import { Navbar, Footer } from './components/navigation'
import { DisplayLinks, Input, BoostLinks } from './components/links'
import { AdvStats } from './components/advstats';

import './App.css'

function App() {
  const [urls, setUrls] = useState<ShortenedURL[] | null>([])
  const [refreshValue, setRefreshValue] = useState<boolean>(false)

  useEffect(() => {
    const data = readUrls()
    setUrls(data)
  }, [refreshValue])

  const refresh = (): void => setRefreshValue(prev => !prev)

  return (
    <>
      <Navbar />
      <HeadBanner />
      <MainLayout>
        <Input refresh={refresh} />
        {urls! && <DisplayLinks urls={urls} refresh={refresh} />}
        <AdvStats />
      </MainLayout>
      <BoostLinks />
      <Footer />
    </>
  );
}

export default App;
