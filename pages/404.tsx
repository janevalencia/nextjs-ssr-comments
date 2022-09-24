import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound : NextPage = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Ooops! Something went wrong ...</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='section notfound w-full p-4 md:p-8 h-[65vh]'>
                <h1 className='notfound__title'>🦄 Ooops ... 404!</h1>
                <h2 className='notfound__subtitle py-5'>Something went wrong!</h2>
                <p className='notfound__description'>Click here to return to <Link href='/'><a className='text-blue-600'>homepage</a></Link>.</p>
            </div>
        </>
    );
}

export default NotFound;