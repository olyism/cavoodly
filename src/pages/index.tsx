import Head from 'next/head';
import TheHeader from '@/components/TheHeader';
import MediaItem from "@/components/MediaItem";
import data from "@/data/content.json";

export default function Home() {
  const { gallery } = data;

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
        <main className="py-16 px-4 sm:px-8 xl:px-16">
          {
            gallery.length > 0 && (
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {gallery.map((media) => (<li><MediaItem media={media} /></li>))}
              </ol>  
            )
          }
        </main>
      </div>
    </>
  )
};
