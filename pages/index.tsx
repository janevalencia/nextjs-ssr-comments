import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge</title>
        <meta name="description" content="Solution for Frontend Mentor Comment-Challenge using React, NextJS, and TailwindCSS." />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        Comment Components
      </main>
    </>
  )
}

export default Home;
