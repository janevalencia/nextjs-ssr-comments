import type { NextPage } from 'next';
import Head from 'next/head';

const Custom500 = () => {
    return (
        <>
            <Head>
                <title>500: Server Error</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='section server-error w-full p-4 md:p-8 h-[65vh]'>
                <h1 className='server-error__title'>💀 500: Server Error</h1>
                <h2 className='server-error__subtitle py-5'>Contact our Tech support ASAP!</h2>
            </div>
        </>
    );
}

export default Custom500;