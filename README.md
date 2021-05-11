# CSR vs SSR vs SSG using NextJS for fetching data and rendering Gov React components


## The Goal:

This is an example of the different ways we can use NextJS with React Gov components.

- Client-side rendering: `/pages/csr.js`
- Server-side rendering: `/pages/ssr.js`
- Static-site generation: `/pages/ssg.js`

The goal is to verify the rendering, visualisation and fething of data with different NextJS rendering techniques.

We will confirm that these rendered pages will not loose the visual and functional aspects brought by React Gov libraries.

## The Approach:

1. On the initial page we have 3 links for each of the renderings:

- Client-side rendering example
- Server-side rendering example
- Static-generated site example

2. We are opening each of the pages in normal browser with enabled JavaScript

We can see that all the pages have been rendered as expected.

3. We turn off the javascript support for the browser

When we open the pages again we see that the pages are not looking as expected

## Conclusion:

for the Client-Side rendering we will not be able to fetch the data successfully. The React Gov button will loose its look and feel

The serverside rendering and the statically generated pages will be able to deal with the fetching of the data but will fail into rendering the GovUK React button with the expecte styling.


Start the project by running:

```bash
npm run dev
```

For static-site generation run:

```bash
npm run export
```

This is a starter template for [Learn Next.js](https://nextjs.org/learn).
