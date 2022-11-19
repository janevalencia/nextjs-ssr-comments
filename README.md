Solution developed by **Jane Valencia, 2022**

# Interactive Comments Section: NextJS with Typescript (SSR) / TailwindCSS

![Design preview for the Interactive comments section coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

This challenge is originally from Frontend Mentor which has been extended so that it could be developed using the latest React framework, NextJS, and SSR technology.

**To do this challenge, you need a strong understanding of HTML, CSS, Javascript/Typescript, and React.**

Your challenge is to build out this interactive comments section and get it looking as close to the design as possible. 

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the sample data in a local `db.json` file to get you started!

For the solution I develop here, I am taking it slightly further by using:
- Full-stack React App with NextJS with Typescript
- TailwindCSS
- SASS
- MongoDB / Mongoose
- Other libraries: momentjs, swr, fontawesome

**DISCLAIMER:** There are no such thing as "one solution fits all"! Hence, while comparing solution, if you figure out ways how I can further improve the project solution, please drop in to discussion. Let's all learn from each other!

### Requirement

Your users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size (mobile & desktop).
- [x] See hover states for all interactive elements on the page.
- [x] Create, Read, Update, and Delete comments and replies.
- [x] Upvote and downvote comments.
- [x] State is saved in database (or if you are creating a full front-end project, then make use of localStorage).
- [x] Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.
- [x] First-level comments should be ordered by their score.
- [x] First-level comment with the same score will be ordered by time added (earlist to latest).
- [x] Nested replies are ordered by time added (earliest to latest).
- [x] Replying to a comment adds the new reply to the bottom of the nested replies within that comment.
- [x] A confirmation modal should pop up before a comment or reply is deleted (**Bonus:** Make use of react-portals to handle Modal).
- [x] Adding a new comment or reply uses the `currentUser` object from within the `db.json` file (or if you have used db / localStorage to store `currentUser`).
- [x] You can only edit or delete your own comments and replies.

## Assets

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

You will find all the required assets in the `/design/assets` folder. The assets are already optimized.

There is also a `style-guide.md` [file here](https://github.com/janevalencia/fem-comments/blob/staging/style-guide.md), containing the information you'll need, such as color palette and fonts.

## Development
I have created a project https://github.com/janevalencia/nextjs-ssr-comments/projects/1 for this solution to outline my development processes as well as product backlog created to track my progress.

List of closed issues can be found [here](https://github.com/janevalencia/nextjs-ssr-comments/issues?q=is%3Aissue+is%3Aclosed).

Feel free to use any project management and development workflow that you feel comfortable with!

## Deployment

My recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/) (recommended, if you are following this particular solution using NextJS)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Last words
I had a lot of fun building and extending this challenge. If you find this challenge and solution useful, please continue sharing it to others!

Thank you for visiting my repository.

**Have fun building!** 🚀

Connect with me:

- [LinkedIn](https://www.linkedin.com/in/janevalencia/)
- [Medium](https://medium.com/@janevalencia)
