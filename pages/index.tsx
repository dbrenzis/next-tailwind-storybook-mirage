import type { NextPage } from 'next'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from '../components/List'

const Home: NextPage = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
          <List />
        </div>
      </main>
    </QueryClientProvider>
  )
}

export default Home
