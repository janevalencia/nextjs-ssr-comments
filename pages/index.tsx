import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import { IUser } from "../interfaces";
import { CommentCard, AddForm } from "../components";

// To be deleted later once DB is setup.
const SampleData = [
  {
    "id": "1",
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "timestamp": "1 month ago",
    "votes": 12,
    "user": {
      "image": { 
        "png": "/assets/images/image-amyrobson.png"
      },
      "username": "amyrobson",
    },
    "replies": []
  },
  {
    "id": "2",
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "timestamp": "2 weeks ago",
    "votes": 5,
    "user": {
      "image": { 
        "png": "/assets/images/image-maxblagun.png"
      },
      "username": "maxblagun",
    },
    "replies": [
      {
        "id": "3",
        "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        "timestamp": "1 week ago",
        "votes": 4,
        "replyingTo": "maxblagun",
        "user": {
          "image": { 
            "png": "/assets/images/image-ramsesmiron.png"
          },
          "username": "ramsesmiron",
        }
      },
      {
        "id": "4",
        "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        "timestamp": "2 days ago",
        "votes": 2,
        "replyingTo": "ramsesmiron",
        "user": {
          "image": { 
            "png": "/assets/images/image-juliusomo.png"
          },
          "username": "juliusomo",
        }
      }
    ]
  }
]

// Define Index page component.
const Home: NextPage = ( { currentUser } :  InferGetServerSidePropsType<typeof getServerSideProps> ) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge</title>
        <meta name="description" content="Solution for Frontend Mentor Comment-Challenge using React, NextJS, and TailwindCSS." />
      </Head>
      <main className="section flex min-h-screen flex-col justify-top p-4 md:p-8">
        <section className="flex flex-col mb-6 w-full">
          {SampleData.map( (data) => (
            <article key={data.id}>
              <CommentCard currentUser={currentUser} comment={data} />
            </article>
          ) )}
        </section>
        <section className="comments-new">
          <AddForm currentUser={ currentUser } />
        </section>
      </main>
    </>
  )
}

// Get props from Server Side Rendering (run-time).
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch currentUser data from db (persisted currentUser).
  const { LOCAL_API_USERS_URL } = process.env;
  const res = await fetch( `${LOCAL_API_USERS_URL!}/juliusomo` );
  const currentUser : IUser = await res.json();

  // Throw 404 page when API request failed.
  if (!currentUser) {
    console.log('Failed to fetch data from API routes!')
    return {
      notFound: true,
    }
  }

  // Return props.
  return {
    props : {
      currentUser
    }
  }
}

export default Home;
