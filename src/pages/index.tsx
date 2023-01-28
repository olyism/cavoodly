import Head from 'next/head';
import TheHeader from '@/components/TheHeader';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cavoodly</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white max-w-screen-xl min-h-screen mx-auto">
        <TheHeader />
      </div>
    </>
  )
};
