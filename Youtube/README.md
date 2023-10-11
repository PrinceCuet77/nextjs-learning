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
      - [Preparing Our Project Pages](#preparing-our-project-pages)
      - [Rendering A List of (Dummy) Meetups](#rendering-a-list-of-dummy-meetups)
      - [Adding A Form For Adding Meetups](#adding-a-form-for-adding-meetups)
      - [The '\_app.js' File \& Wrapper Components](#the-_appjs-file--wrapper-components)
      - [Programmatic Navigation](#programmatic-navigation)
      - [Adding Custom Components \& Styling With CSS](#adding-custom-components--styling-with-css)
      - [How NextJS Page Pre-Rendering Actually Works](#how-nextjs-page-pre-rendering-actually-works)
      - [Introduction API Routes](#introduction-api-routes)
      - [Pre-rendering](#pre-rendering)
- [Getting Meetup Detail Data \& Paths](#getting-meetup-detail-data--paths)

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

#### Preparing Our Project Pages

- Add some files

```sh
- components/ # Root directory. 'components' folder stores all the components.
    - layout
        - Layout.js
        - Layout.module.css
        - MainNavigation.js
        - MainNavigation.module.css
    - meetups
        - MeetupItem.js
        - MeetupItem.module.css
        - MeetupList.js
        - MeetupList.module.css
        - NewMeetupForm.js
        - NewMeetupForm.module.css
    - ui
        - Card.js
        - Card.module.css
- pages/ # Root directory
    - [meetupId] # Directory
        - index.js
    - new-meetup
        - index.js
```

- Remove some files

```sh
- pages/news/
    - [newsId].js
    - index.js
- index.js
```

- Re-edit `styles/globals.css` files

#### Rendering A List of (Dummy) Meetups

The `data.js` file in the root directory:

```js
// Named import
export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
]
```

The `pages/index.js` file:

```js
import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data'

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
```

The content of the `components/meetups/MeetupList.js` file:

```js
import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  )
}

export default MeetupList
```

The content of the `components/meetups/MeetupItem.js` file:

```js
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
```

The content of the `components/ui/Card.js` file:

```js
import classes from './Card.module.css'

function Card(props) {
  return <div className={classes.card}>{props.children}</div>
}

export default Card
```

#### Adding A Form For Adding Meetups

The `pages/new-meetup/index.js` file:

```js

```

The content of the `components/meetups/NewMeetupForm.js` file:

```js
import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
```

The `pages/new-meetup/index.js` file:

```js
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage
```

#### The '\_app.js' File & Wrapper Components

`pages/_app.js` file:

- Root component(`MyApp`) which render Next JS
- `Component` props - page content what should be rendered
- `pageProps` props - specific props our pages might be getting
- This `MyApp` component is the actual page content of our different pages and it will change whenever we navigate from page a to page b.
- Utilizing this `_app.js` file and simply wrap this component with our layout
- So that we don't have to do it inside of our different page files

```js
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

The content of the `components/layout/Layout.js` file:

```js
import MainNavigation from './MainNavigation'
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout
```

The content of the `components/layout/MainNavigation.js` file:

```js
import Link from 'next/link'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
```

#### Programmatic Navigation

The `components/meetups/MeetupItem.js` file:

```js
import { useRouter } from 'next/router'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

function MeetupItem(props) {
  const router = useRouter()

  const showDetailsHandler = () => {
    router.push('/' + props.id) // http://localhost:3000/m1 (props.id = 'm1')
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
```

#### Adding Custom Components & Styling With CSS

- Unlock a features called css module
- It allows to scope css class styles to a react component and
- It is supported out of the box in next js projects
- Named css file like `file.module.css` then import that file like:

```js
import classes from './MeetupDetail.module.css'
```

- Behind the scenes it will transform the css classes
- So that the class ensures class name are unique per component
- That ensures the styles can't spill over to other component
- That `classes` is now like an object and all the styles inside that file can treat like a property of that object

```js
const MeetupDetail = (props) = {
  return (
    <section className={classes.detail}>...</section>
  )
}
```

The content of `MeetupDetail.module.css` file:

```css
.detail {
  text-align: center;
}

.detail img {
  width: 100%;
}
```

The `pages/[meetupId]/index.js` file:

```js
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { DUMMY_MEETUPS } from '../../data'

const MeetupDetails = () => {
  return <MeetupDetail {...DUMMY_MEETUPS[0]} />
}

export default MeetupDetails
```

The `components/meetups/MeetupDetail.js` file:

```js
import classes from './MeetupDetail.module.css'

const MeetupDetail = ({ id, title, image, address, description }) => {
  console.log('a')
  return (
    <section className={classes.detail}>
      <img src={image} alt='' />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}

export default MeetupDetail
```

#### How NextJS Page Pre-Rendering Actually Works

- Two forms of Pre-Rendering
  - Static Generation
  - Server-side Rendering

**Static Generation:**

- A page component is pre-rendered when you build your application or project in nextjs for production
- By default, page is not pre-rendered on the server when a request reaches the server
- But instead it is pre-render when a developer build the site for production
- That means after it was deployed that pre-rendered page does not change
- If the data is updated then pre-rendered page needs to change, I need to start that build process and redeploy again
- If I need to wait for data fetching to a page component, I can export a special function named `getStaticProps()` inside that page (not other component file, only page component file)
- NextJS searches that function and executes that function during pre-rendering process
- NextJS calls `getStaticProps()` function before calling that page component
- The `getStaticProps()` function prepare props for this page
- This props contain the data this page needs
- This `getStaticProps()` function is processing its work in the build time not client side rendering or in the client machine
- It returns an object with a property named `props` which will receive that page component as `props` parameter in it
- If the fetching data does change frequently, there is an extra property which I can add to this returned object named `revalidate` property
- This `revalidate` property unlock a feature called incremental static generation
- The value of that property ensure that this page will occasionally be re-pre-generated on the server after deployment
- So that I do not have to redeploy and rebuild all the time just because some data changed

```js
export async function getStaticProps(context) {
  // 'context' is optional
  // Fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // 10 sec
  }
}
```

The `pages/index.js` file:

```js
import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data'

const HomePage = (props) => {
  // 'props' is pre-rendering in 'getStaticProps()' function
  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
```

**Server-side Rendering:**

- Sometimes I need to regenarate this page for every incoming request
- pre-generate the page dynamically on the server not in the client side
- That function is named as `getServerSideProps()`

```js
export async function getServerSideProps(context) {
  // 'context' is optional
  // Use for validation (Node JS)
  const req = context.req
  const res = context.res

  // Fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}
```

- Facts:
  - If I need validation and `revalidate` property does not help me for pre-rendering then `getServerSideProps()` is better choice
  - If I do not want to pre-render after every incoming request means I receive a request every 11 minutes then I can set `revalidate` 600 second, this case `getStaticProps()` is better choice

The `pages/index.js` file:

```js
import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data'

const HomePage = (props) => {
  // 'props' is pre-rendering in 'getServerSideProps()' function
  return <MeetupList meetups={props.meetups} />
}

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res

  // Fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
```

Basically, which function do I use or better in a specific case depends on _how often my data changes and I need access to the request object_

**getStaticPaths()**

- While using `getStaticProps()` function, I must use `getStaticPaths()` function.
- NextJS needs to pre-generate all the versions of the dynamic page in advance for all the supported ids
- Because it's dynamic, NextJS needs to know which id values it should pre-generate the page
- So, I have to notify NextJS that users might be entering at runtime using that `meetupId`s
- If user enter an id which NextJS did not pre-generate a page, user will see a `404` error
- The `getStaticPaths()` function returns an object which describes all the dynamic segment values (in this case all the `meetupId`s)
- Based on this `meetupId`s, NextJS pre-generate this pages
- A property named `fallback` tells NextJs whether my `paths` array contains all supported parameter values or some of them
  - `false` means
    - All supported `meetupId` values
    - If user mention enter anything that is not present in support, then the user will see `404` page
  - `true` means
    - Some supported `meetupId` values
    - This case NextJS will try to generate a page for this page `meetupId` dynamically on the server for the incoming request
    - Is a good choice (Because some are already generated and others or rare `meetupId` will generate based on incoming request)

```js
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      // one object per version of the dynamic page
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}
```

The `pages/[meetupId]/index.js` file:

```js
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { DUMMY_MEETUPS } from '../../data'

const MeetupDetails = (props) => {
  return <MeetupDetail {...props.meetupData} />
}

export async function getStaticPaths() {
  return {
    fallback: false, // All supported
    paths: [
      // One object per version of the dynamic page
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  // Just use for static data (not recommanded but only for making workable)
  let index = -1
  if (meetupId === 'm1') index = 0
  else index = 1

  return {
    props: {
      meetupData: DUMMY_MEETUPS[index],
    },
  }
}

export default MeetupDetails
```

#### Introduction API Routes

- API routes allow to build my own API endpoints as part of this NextJS project
- They will be served by the same server as my NextJS app
- To support that, add `pages/api`
- NextJS will pick up any JS files stored in there and turn those files into api routes
- Endpoints can be targeted by requests and that should receive json and return json
- Inside `pages/api`, I can add JS file that will act as path segments in the url
- Those JS file does not create a react component function
- These api routes are not defining rendering or returning react components
- Instead I will define functions which contain server side code because api routes will only run on the server, never on the client side and expose to the client
- If I hit `/api/new-meetup` in the url then it will trigger the function which I have to define in this file

The `/api/new-meetup.js` file:

```js

```

The `pages/new-meetup/index.js` file:

```js

```

#### Pre-rendering

The `pages/index.js` file:

```js

```

# Getting Meetup Detail Data & Paths