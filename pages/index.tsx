import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { IUser, IComment, IReply } from "../interfaces";
import { CommentCard, AddForm } from "../components";

// Define Index page component.
const Home = ( {currentUser, comments} :  InferGetServerSidePropsType<typeof getServerSideProps> ) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge</title>
        <meta name="description" content="Solution for Frontend Mentor Comment-Challenge using React, NextJS, and TailwindCSS." />
      </Head>
      <main className="section flex min-h-screen flex-col justify-top p-4 md:p-8">
        <section className="flex flex-col mb-6 w-full">
          {comments
            .sort((a, b) => a.score > b.score ? -1 : 1)
            .map((comment, index) => (
              <article key={index}>
                <CommentCard currentUser={currentUser} comment={comment} />
              </article>
            ))
          }
        </section>
        <section className="comments-new">
          <AddForm currentUser={currentUser} />
        </section>
      </main>
    </>
  )
}

// Get props from Server Side Rendering (run-time).
export const getServerSideProps: GetServerSideProps<{
  currentUser : IUser,
  comments: IComment[]
}> = async (context) => {
  // Caching config.
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  )

  // Get current environment variable.
  const dev = process.env.NODE_ENV !== 'production';
  const { 
    DEV_URL, 
    PROD_URL, 
    NEXT_PUBLIC_API_USERS_URL, 
    NEXT_PUBLIC_API_COMMENTS_URL, 
    NEXT_PUBLIC_API_REPLIES_URL 
  } = process.env;

  // Fetch currentUser data from db (persisted currentUser = juliusomo, feel free to change).
  const currentUser : IUser = await (await fetch(`${dev ? DEV_URL : PROD_URL}/${NEXT_PUBLIC_API_USERS_URL}/juliusomo`)).json();

  // Fetch comment data from db.
  const comments : IComment[] = await (await fetch(`${dev ? DEV_URL : PROD_URL}/${NEXT_PUBLIC_API_COMMENTS_URL}`)).json();

  // Fetch reply data from db.
  const replies : IReply[] = await (await fetch(`${dev ? DEV_URL : PROD_URL}/${NEXT_PUBLIC_API_REPLIES_URL}`)).json();

  // Throw 404 page when API request failed.
  if (!currentUser || !comments || !replies) {
    console.log('Failed to fetch data from API routes!')
    return {
      notFound: true,
    }
  }

  // Return props.
  return {
    props : {
      currentUser,
      comments,
      replies
    }
  }
}

export default Home;
