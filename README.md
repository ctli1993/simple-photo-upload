This is a simple photo upload app frontend built with TypeScript, Next.js, and Tailwind CSS

## Check out the app
You can checkout this app on [simple-photo-upload-app.vercel.app](https://simple-photo-upload-app.vercel.app/)

This web app is deployed on Vercel. Personally, I like Vercel for the fact that it is very simple and fast. When deploying an Next.js app on Vercel, I only need to connect the app's GitHub repo to Vercel, and with a few clicks, the deployment would be done.

## Tech stacks selection
- I choose TypeScript because the code completion feature provided by TypeScript makes me develop faster. Also, with type checking, it gives me more confidence on my code. Last but not least, if someone would like to maintain this app, explicitly defining type would make thier lives easier.

- I choose Next.js since Next.js pre-render pages. For this app, since it doesn't need to load data from the Server, Next.js pre-renders it with static site generation, resulting in better performance and SEO. This app got 100 and 91 respectively on [Google's Lighthouse test](https://web.dev/measure) without doing any special fine-tuning. Also, I really like the file-system based routing. This app only has one page, so we could not see the advantage here. Nevertheless, if the project sacles up, it would be very easy to organize. 

- I choose Tailwind CSS cause functional CSS (or utility-first CSS) really made me rethink writing CSS. I was inspired by [this piece](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) written by Adam Wathan. Reusable utilities make it fast to build a component. In my past experience, I usually write UI much faster in this way. 
