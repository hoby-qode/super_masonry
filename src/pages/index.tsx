import React from 'react'
import Head from 'next/head'
import Masonry from '@/src/components/Masonry/Masonry'
const Home = () => {
  return (
    <>
      <Head>
        <title>Masonry en CSS</title>
        <meta name="description" content="Création masonry en CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masonry />
    </>
  )
}

export default Home
