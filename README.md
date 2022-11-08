This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Requirements:
[✔] Obtains photos from the "Mars Rover" endpoint
    https://api.nasa.gov/mars-photos/api/v1/rovers/

[✔] Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit)
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/
    https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/
    https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/

[✔] The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, but not required)
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1

[] Allows the user to filter the rover photos by camera
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz

[✔] By default it shows the latest photos for current day
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-11-4 (today)

[] Allows the user to search for photos based on "Earth Day" date (2020-09-22)
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-31

[] Allows the user to search for photos based on the "Sol" date (2890)
    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000

Optional:
[] Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted, any serverless way of storing data is also accepted)
    Save parameters in localstorage or serverless.

[] A lot of extra points if you include a few tests.
    Testing

[✔] You can (and will get extra points) use NextJS to develop your app.

[] Good coding style and consistency mostly, we are interested on seeing how you think and organize a project.

[✔] Good UX/UI design.

[] Use a linter!#   n a s a  
 