import type { NextPage } from "next";
import Head from "next/head";
import { CommentCard, CommentForm } from "../components";

// To be deleted later once DB is setup.
const SampleData = [{
  "id": "1",
  "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  "timestamp": "1 month ago",
  "votes": 12,
  "user": {
    "image": { 
      "png": "/assets/images/image-amyrobson.png"
    },
    "username": "amyrobson",
    "loggedInUser": false,
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
          "loggedInUser": false,
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
          "loggedInUser": true,
        }
      }
  ]
}]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenge</title>
        <meta name="description" content="Solution for Frontend Mentor Comment-Challenge using React, NextJS, and TailwindCSS." />
      </Head>
      <main className="section flex min-h-screen flex-col justify-top p-4 md:p-8">
        <section className="flex flex-col mb-6 w-full">
          {SampleData.map( (data) => (
            <article>
              <CommentCard {...data}/>
            </article>
          ) )}
        </section>
        <section className="comments-new">
          <CommentForm />
        </section>
      </main>
    </>
  )
}

export default Home;
