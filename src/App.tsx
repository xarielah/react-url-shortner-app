import { useEffect, useState } from 'react';
import { HeadBanner, DisplayURL, Input } from './components'
import { readUrls } from './utils/crudFunctions'
import { ShortenedURL } from './types/storeLink';

function App() {
  const [urls, setUrls] = useState<ShortenedURL[] | null>([])
  const [refreshValue, setRefreshValue] = useState<boolean>(false)

  useEffect(() => {
    const data = readUrls()
    setUrls(data)
  }, [refreshValue])

  const refresh = (): void => setRefreshValue(prev => !prev)

  return (
    <section>
      <HeadBanner />
      <Input refresh={refresh} />
      {urls && <DisplayURL urls={urls} />}
    </section>
  );
}

export default App;
