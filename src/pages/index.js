import Head from 'next/head'
import Martian from '@/components/Martian'

export default function Home() {
  return (
    <>
      <Head>
        <title>Martian</title>
        <meta name="description" content="Martian vizit cards printing house" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Martian />
    </>
  )
}
