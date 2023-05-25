# Next JS Learning

Next JS is a React JS framework where React JS is a Javascript library.

## The Table Of Contents

- [Next JS Learning](#next-js-learning)
  - [The Table Of Contents](#the-table-of-contents)
  - [React JS lackings](#react-js-lackings)
  - [Next JS - Key Features and Benefits](#next-js---key-features-and-benefits)
    - [How To Run](#how-to-run)
    - [File Structure](#file-structure)
    - [Before Start](#before-start)
    - [Starter File Stucture](#starter-file-stucture)
    - [Start Coding](#start-coding)
      - [Adding First Pages To The Project](#adding-first-pages-to-the-project)
      - [Adding Nested Pages / Paths](#adding-nested-pages--paths)
      - [Creating Dynamic Pages](#creating-dynamic-pages)
      - [Extracting Dynamic Route Data](#extracting-dynamic-route-data)
      - [Linking Between Pages](#linking-between-pages)

## React JS lackings

- Client-side javascript library
- Data fetching from server-side, so loading time exist
- SEO (Search Engine Optimization) can not possible because of client-side rendering

## Next JS - Key Features and Benefits

Server side Rendering

- Automatic page pre-rendering: Great for SEO and initial load
- Blending client-side and server-side: Fetch data on the server and render finished pages

File-based Routing

- Define pages and routes with file and folders instead of code
- Less code, less work, highly understandable

Fullstack Capabilities

- Easily add backend (server-side) code to your Next/React apps
- Storing data, getting data, authentication etc. can be added to your React projects

### How To Run

```sh
npx create-next-app nextjs-learning
cd nextjs-learning
npm run dev # http://localhost:3000/
```

### File Structure

1. `pages/` - setup file-based routing
2. `public/` - holds public resources like images
3. `styles/` - holds style files like css

### Before Start

Removes some files

```sh
- pages/api/
- pages/index.js
- styles/Home.module.css
- public/favicon.ico
- public/vercel.svg
```

### Starter File Stucture

```sh
- pages/
    - _app.js
- public # Empty
- styles
    - globals.css
```

### Start Coding

#### Adding First Pages To The Project

Creates `pages/index.js` file:

```js
// our-domain.com/

const HomePage = () => {
  return <h1>HomePage</h1>
}

export default HomePage
```

Creates `pages/news.js` file:

```js
// our-domain.com/news

const NewPage = () => {
  return <h1>NewPage</h1>
}

export default NewPage
```

#### Adding Nested Pages / Paths

File structure is working in two modes:

1. In `pages/` folder, I can denote path name as a file name

```sh
- pages/
    - index.js # http://localhost:3000/
    - news.js # http://localhost:3000/news
```

2. I create nested folder in `pages/` folder and demote path name as index.js

```sh
- pages/
    - index.js # http://localhost:3000/
    - news/
        - index.js # http://localhost:3000/news
        - something-important.js # http://localhost:3000/news/something-important
```

Creates `pages/news/something-important.js` file:

```js
// our-domain.com/news/something-important

const DetailPage = () => {
  return <h1>DetailPage</h1>
}

export default DetailPage
```

#### Creating Dynamic Pages

- Use `[newsId].js` in `pages/news/` folder to create a dynamic page.
- `newsId` is called the identifier.
- Anything hitting after `http://localhost:3000/news/` can show the content of `[newsId].js` file
- For example:

```sh
http://localhost:3000/news/something-important
http://localhost:3000/news/something-else
http://localhost:3000/news/another-file # etc.
```

#### Extracting Dynamic Route Data

- To extract the concrete value entered in the URL, nextjs has special hook (react hook)

```js
import { useRouter } from 'next/router'
```

The content of `pages/news/[newsId].js` file:

```js
import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter()

  // For 'http://localhost:3000/news/something' then,
  console.log(router.query.newsId) // something

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>DetailPage</h1>
}

export default DetailPage
```

#### Linking Between Pages

- Using `a` tag is not creating a single page application.
- To create a SPA, use:

```js
import Link from 'next/link'
```

- Use `Link` instead of `a` tag.

The content of the `pages/news/index.js` file:

```js
import Link from 'next/link'

const NewPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great FrameWork
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  )
}

export default NewPage
```
