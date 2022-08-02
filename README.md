Solution developed by **Jane Valencia, 2022**

# Frontend Mentor - Interactive comments section

![Design preview for the Interactive comments section coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a strong understanding of HTML, CSS and JavaScript.**

Your challenge is to build out this interactive comments section and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the sample data in a local `db.json` file to get you started! If you want to take it up a notch, feel free to build this as a full-stack CRUD application! 🚀

For the solution I develop here, I am taking it slightly further by using:
- Full-stack React App with NextJS with Typescript
- TailwindCSS
- SASS
- MongoDB / Mongoose

Again, you are free to choose other framework to craft your solution for this fun challenge!

### Requirement

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size (mobile & desktop).
- See hover states for all interactive elements on the page.
- Create, Read, Update, and Delete comments and replies.
- Upvote and downvote comments.
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.
- First-level comments should be ordered by their score.
- Nested replies are ordered by time added (earliest to latest).
- Replying to a comment adds the new reply to the bottom of the nested replies within that comment.
- A confirmation modal should pop up before a comment or reply is deleted.
- Adding a new comment or reply uses the `currentUser` object from within the `db.json` file (or if you have used db / localStorage to store `currentUser`).
- You can only edit or delete your own comments and replies.

## Assets

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

You will find all the required assets in the `/design/assets` folder. The assets are already optimized.

There is also a `style-guide.md` [file here](https://github.com/janevalencia/fem-comments/blob/staging/style-guide.md), containing the information you'll need, such as color palette and fonts.

## Development

Feel free to use any project management and development workflow that you feel comfortable with! 

Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deployment

As mentioned above, there are many ways to host your project for free. 

Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/) (recommended, if you are following this particular solution)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Wiki

I have created a step-by-step processes done to develop this fem-challenge in the Wiki page [TBA](). I strongly suggest you start working on your solution first and then comeback to this section when you are ready to compare and review your solution. 

DISCLAIMER: There are no such thing as "one solution fits all"! Hence, while comparing solution, if you figure out ways how I can further improve the project solution, please drop in to discussion. Let's all learn from each other!

## Submitting your solution to Frontend Mentor (FEM)

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this. Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

**Have fun building!** 🚀
