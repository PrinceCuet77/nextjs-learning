# Next JS Learning

-   [Next JS Learning](#next-js-learning)
    -   [React JS lackings](#react-js-lackings)
    -   [Next JS - Key Features and Benefits](#next-js---key-features-and-benefits)
        -   [How To Run](#how-to-run)
        -   [File Structure](#file-structure)
        -   [Before Start](#before-start)
        -   [Starter File Stucture](#starter-file-stucture)
        -   [Start Coding](#start-coding)
            -   [Adding First Pages To The Project](#adding-first-pages-to-the-project)

## React JS lackings

-   Client-side javascript library
-   Data fetching from server-side, so loading time exist
-   SEO (Search Engine Optimization) can not possible because of client-side rendering

## Next JS - Key Features and Benefits

Server side Rendering

-   Automatic page pre-rendering: Great for SEO and initial load
-   Blending client-side and server-side: Fetch data on the server and render finished pages

File-based Routing

-   Define pages and routes with file and folders instead of code
-   Less code, less work, highly understandable

Fullstack Capabilities

-   Easily add backend (server-side) code to your Next/React apps
-   Storing data, getting data, authentication etc. can be added to your React projects

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
    return <div>HomePage</div>
}

export default HomePage
```

Creates `pages/news.js` file:

```js
// our-domain.com/news

const NewPage = () => {
    return <div>NewPage</div>
}

export default NewPage
```
