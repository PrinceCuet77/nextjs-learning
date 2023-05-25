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
